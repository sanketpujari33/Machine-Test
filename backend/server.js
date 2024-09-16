const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config({ path: ".env" });
const morgan = require("morgan");
var cron = require('node-cron');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const taskRouter = require('./routes/taskRouter');
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of the task
 *         description:
 *           type: string
 *           description: The description of the task
 *       example:
 *         id: 1
 *         title: Sample Task
 *         description: This is a sample task
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The task managing API
 */

app.use('/tasks', taskRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 8000;
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});
app.listen(PORT, () => {
    console.log(`Task API is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});