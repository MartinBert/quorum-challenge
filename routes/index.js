const express = require('express');
const app = express();
const router = express.Router();
const userRoutes = require('./users');
const login = require('./login');

router.use('/login', login);
router.use('/users', userRoutes);

module.exports = app.use(router);