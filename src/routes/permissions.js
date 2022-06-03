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
 *       - in: headers
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Token of login
 *     responses:
 *       200:
 *         description: create permission
 */
router.get('/', async(req, res) => {
  res.status(200).send({permissions: await controller.findAll(req.query)});
});

router.get('/:id', async(req, res) => {
  res.status(200).send({permission: await controller.findById(parseInt(req.params.id))});
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
  res.status(200).send({permission: await controller.create(req.body)})
})

/**
 * @swagger
 * 
 * /permissions:
 *   put:
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
  res.status(200).send({permission: await controller.edit(req.body)})
})

router.delete('/:id', async(req, res) => {
  res.status(200).send({permission: await controller.delete(parseInt(req.params.id))})
})

module.exports = router;