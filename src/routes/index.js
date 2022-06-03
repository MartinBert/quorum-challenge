const express = require('express');
const app = express();
const router = express.Router();
const userRoutes = require('./users');
const permissionRoutes = require('./permissions');
const roleRoutes = require('./roles');
const login = require('./login');
const auth = require('../middleware/auth')

router.use('/login', login);
router.use('/users', auth.checkIfUserIsAuthorized, userRoutes);
router.use('/permissions', auth.checkIfUserIsAuthorized, permissionRoutes);
router.use('/roles', auth.checkIfUserIsAuthorized, roleRoutes);

module.exports = app.use(router);