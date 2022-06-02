
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

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(routes);

const fillDatabase = async() => {
    const filledUser = await prisma.users.findUnique({where: {id : 10}})
    if(filledUser == null){
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
