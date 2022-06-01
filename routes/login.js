'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth');

router.post('/', async(req, res) => {
  const token = await middleware.login(req.body);
  if(token) return res.status(200).send({token})
});

module.exports = router;