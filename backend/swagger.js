const swaggerDoc = require('swagger-jsdoc');
require("dotenv").config({ path: ".env" });

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Assignment: Blog Management System',
            version: '1.0.0',
            description: 'You are tasked with building a simple RESTful API using Node.js that manages a collection of tasks (e.g., blog Post items). The API should allow users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks. The data should be stored in memory (no database required). Your API should support the following endpoints: login: admin, password: admin'
        },
        servers: [
            {
                url: process.env.ACCESS_CONTROL_ALLOW_ORIGIN
            }
        ],
        components: {
            securitySchemes: {
                basicAuth: {
                    type: 'http',
                    scheme: 'basic'
                }
            },
            security: [
                {
                    basicAuth: []
                }
            ]
        },
    },
    apis: ['./routes/*.js']
};

const swaggerDocument = swaggerDoc(options);

module.exports = swaggerDocument;
