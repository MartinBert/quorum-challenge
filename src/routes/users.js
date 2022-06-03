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
  res.status(200).send({users: await controller.findAll(req.query)});
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
  res.status(200).send({user: await controller.findById(parseInt(req.params.id))});
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
  res.status(200).send({user: await controller.create(req.body)})
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
  res.status(200).send({user: await controller.edit(req.body)})
})

router.put('/addRoles', async(req, res) => {
  res.status(200).send({user: await controller.addRoles(req.body)})
})

router.put('/addPermissions', async(req, res) => {
  res.status(200).send({user: await controller.addPermissions(req.body)})
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
  console.log('deleteado pete')
  //res.status(200).send({user: await controller.delete(parseInt(req.params.id))})
})

module.exports = router;