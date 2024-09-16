const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const basicAuth = require('../middleware/basicAuth');
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Returns the list of all tasks with pagination, sorting, and filtering
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of tasks to return per page
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: id
 *         description: The field to sort tasks by
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *           default: ''
 *         description: The keyword to filter tasks by title or description
 *     responses:
 *       200:
 *         description: The list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 total:
 *                   type: integer
 *                 tasks:
 *                   type: array
 *                   items:
 *                     $ref: '#/'
 */

router.get('/', taskController.getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a specific task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The task ID
 *     responses:
 *       200:
 *         description: The task description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/'
 *       404:
 *         description: Task not found
 */

router.get('/:id', taskController.getTaskById);
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
  *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               description:
 *                 type: string
 *                 description: The description of the task
 *             example:
 *               title: Sample Task
 *               description: This is a sample task
 *     responses:
 *       201:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/'
 *       400:
 *         description: Title and description are required
 *       401:
 *         description: Authentication required
 */
router.post('/', basicAuth, taskController.createTask);
/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update an existing task by ID
 *     tags: [Tasks]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               description:
 *                 type: string
 *                 description: The description of the task
 *             example:
 *               title: Updated Task
 *               description: This is an updated task
 *     responses:
 *       200:
 *         description: The task was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/'
 *       400:
 *         description: Title and description are required
 *       404:
 *         description: Task not found
 *       401:
 *         description: Authentication required
 */
router.put('/:id', basicAuth, taskController.updateTask);
/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The task ID
 *     responses:
 *       204:
 *         description: The task was successfully deleted
 *       404:
 *         description: Task not found
 *       401:
 *         description: Authentication required
 */

router.delete('/:id', basicAuth, taskController.deleteTask);

module.exports = router;
