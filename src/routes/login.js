'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth');

/**
     * @swagger
     *
     * /login:
     *   post:
     *     description: Login to the application
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: username
     *         description: Username to use for login.
     *         in: formData
     *         required: true
     *         type: string
     *       - name: password
     *         description: User's password.
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: login
     */
router.post('/', async(req, res) => {
  const token = await middleware.login(req.body);
  if(token) return res.status(200).send({token});
  return res.status(500).send({
    error: 500,
    message: 'Internal server error'
  })
});

module.exports = router;