'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/roles');

/**
 * @swagger
 * 
 * /roles:
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
  res.status(200).send({roles: await controller.findAll(req.query)});
});

/**
 * @swagger
 * 
 * /roles/id:
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
  res.status(200).send({role: await controller.findById(parseInt(req.params.id))});
}) 

/**
 * @swagger
 * 
 * /roles:
 *   post:
 *     description: Create role
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
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - name
 *               - permissions
 *     responses:
 *       200:
 *         description: create role
 */
router.post('/', async(req, res) => {
  res.status(200).send({role: await controller.create(req.body)})
})

/**
 * @swagger
 * 
 * /roles:
 *   put:
 *     description: Edit role
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
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: integer
 *             required:
 *               - id
 *               - name
 *               - permissions
 *     responses:
 *       200:
 *         description: edit role
 */
router.put('/', async(req, res) => {
  res.status(200).send({role: await controller.edit(req.body)})
})

/**
 * @swagger
 * 
 * /roles/id:
 *   delete:
 *     description: Ger role by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: params
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of role
 *     responses:
 *       200:
 *         description: create role
 */
router.delete('/:id', async(req, res) => {
  res.status(200).send({role: await controller.delete(parseInt(req.params.id))})
})

module.exports = router;