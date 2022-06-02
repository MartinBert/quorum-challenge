'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', async(req, res) => {
  res.status(200).send({users: await controller.findAll(req.query)});
});

router.get('/:id', async(req, res) => {
  res.status(200).send({user: await controller.findById(parseInt(req.params.id))});
}) 

router.post('/', async(req, res) => {
  res.status(200).send({user: await controller.create(req.body)})
})

router.put('/', async(req, res) => {
  res.status(200).send({user: await controller.edit(req.body)})
})

router.delete('/:id', async(req, res) => {
  res.status(200).send({user: await controller.delete(parseInt(req.params.id))})
})

module.exports = router;