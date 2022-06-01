
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const config = require('./server.config');
const routes = require('./routes/index');

app.use(cors())
app.use(routes)

http.listen(config.port, async(error) => {
    console.log('Application is running at: ' + config.port);
});

module.exports = app;
