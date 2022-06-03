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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
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