const express = require('express');
const app = express();
const router = express.Router();
const userRoutes = require('./users');
const login = require('./login');
const auth = require('../middleware/auth')

router.use('/login', login);
router.use('/users', auth.checkIfUserIsAuthorized, userRoutes);

module.exports = app.use(router);