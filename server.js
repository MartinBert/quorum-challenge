
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);
const routes = require('./routes/index');
const {preloadedUsers} = require('./dataload');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const fillDatabase = async() => {
    const filledUser = await prisma.users.findUnique({where: {id : 2}})
    if(filledUser == null){
        for(let user of preloadedUsers){
            const result = await prisma.users.create({data: user});
            console.log(result);
        }
    }
}
fillDatabase();

http.listen(3000, async() => {
    console.log('Application is running at: ' + 3000);
});

module.exports = app;
