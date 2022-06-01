'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', async(req, res) => {
  controller.findAll();
});

router.get('/:id', async(req, res) => {
  controller.findById(parseInt(req.params.id));
}) 

router.post('/', async(req, res) => {
  controller.create()
})

module.exports = router;