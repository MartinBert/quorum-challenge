'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/permissions');

/**
 * @swagger
 * 
 * /permissions:
 *   get:
 *     description: Ger permission list
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: skip
 *         required: true
 *         schema:
 *           type: integer
 *         description: Number of skipped pages
 *       - in: query
 *         name: take
 *         required: true
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: create permission
 */
router.get('/', async(req, res) => {
  try{
    res.status(200).send({permissions: await controller.findAll(req.query)});
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
});

/**
 * @swagger
 * 
 * /permissions/id:
 *   get:
 *     description: Ger permission by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: params
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of permission
 *     responses:
 *       200:
 *         description: create permission
 */
router.get('/:id', async(req, res) => {
  try{
    res.status(200).send({permission: await controller.findById(parseInt(req.params.id))});
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
}) 

/**
 * @swagger
 * 
 * /permissions:
 *   post:
 *     description: Create permission
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               routes:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - name
 *               - routes
 *     responses:
 *       200:
 *         description: create permission
 */
router.post('/', async(req, res) => {
  try{
    res.status(200).send({permission: await controller.create(req.body)});
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
})

/**
 * @swagger
 * 
 * /permissions:
 *   put:
 *     description: Edit permission
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               routes:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - id
 *               - name
 *               - routes
 *     responses:
 *       200:
 *         description: edit permission
 */
router.put('/', async(req, res) => {
  try{
    res.status(200).send({permission: await controller.edit(req.body)});
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
})


/**
 * @swagger
 * 
 * /permissions/id:
 *   delete:
 *     description: Ger permission by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: params
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of permission
 *     responses:
 *       200:
 *         description: create permission
 */
router.delete('/:id', async(req, res) => {
  try{
    res.status(200).send({permission: await controller.delete(parseInt(req.params.id))})
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
})

module.exports = router;