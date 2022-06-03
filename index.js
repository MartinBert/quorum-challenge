
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const http = require('http').createServer(app);
const routes = require('./src/routes/index');
const {preloadedUsers} = require('./dataload');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node application",
            version: "1.0.0"
        },
    },
    basePath: "/",
    apis: ["./src/routes/*.js"]
}

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(routes);

const fillDatabase = async() => {
    const filledPermission = await prisma.permissions.findFirst();
    if(!filledPermission){
        for(let user of preloadedUsers){
            await prisma.users.create({data: user});
        }
        console.log('Database filled');
    }
}
fillDatabase();

http.listen(3000, async() => {
    console.log('Application is running at: ' + 3000);
});

module.exports = app;
