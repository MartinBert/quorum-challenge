'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const middleware = require('../middleware/permissionCheck');

/**
 * @swagger
 * 
 * /user:
 *   get:
 *     description: Ger user list
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
 *         description: create user
 */
router.get('/', async(req, res) => {
  try{
    res.status(200).send({users: await controller.findAll(req.query)});
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
 * /user/id:
 *   get:
 *     description: Ger user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: params
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of user
 *     responses:
 *       200:
 *         description: create user
 */
router.get('/:id', async(req, res) => {
  try{
    res.status(200).send({user: await controller.findById(parseInt(req.params.id))});
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
 * /user:
 *   post:
 *     description: Create user
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
 *               roles:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - name
 *               - roles
 *     responses:
 *       200:
 *         description: create user
 */
router.post('/', async(req, res) => {
  try{
    res.status(200).send({user: await controller.create(req.body)})
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
 * /user:
 *   put:
 *     description: Edit user
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
 *               roles:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - id
 *               - name
 *               - roles
 *     responses:
 *       200:
 *         description: edit user
 */
router.put('/', async(req, res) => {
  try{
    res.status(200).send({user: await controller.edit(req.body)})
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
 * /user/addRoles:
 *   put:
 *     description: Add roles to user
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               roles:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - id
 *               - roles
 *     responses:
 *       200:
 *         description: add role to user
 */
router.put('/addRoles', async(req, res) => {
  try{
    res.status(200).send({user: await controller.addRoles(req.body)})
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
 * /user/addPermissions:
 *   put:
 *     description: Add permissions to user
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
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - id
 *               - permissions
 *     responses:
 *       200:
 *         description: edit user
 */
router.put('/addPermissions', async(req, res) => {
  try{
    res.status(200).send({user: await controller.addPermissions(req.body)})
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
 * /user/id:
 *   delete:
 *     description: Ger user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: params
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of user
 *     responses:
 *       200:
 *         description: create user
 */
router.delete('/:id', middleware.checkPermission ,async(req, res) => {
  try{
    res.status(200).send({user: await controller.delete(parseInt(req.params.id))})
  }catch(err){
    res.status(500).send({
      error: 500,
      errorMessage: err.message
    })
  }
})

module.exports = router;