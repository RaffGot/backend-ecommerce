const express = require("express");
const { ROUTES } = require("../utils/constants");
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

/**
 * @swagger
 * /private/api/users:
 *   get:
 *     summary: Returns the list of all users
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: The list of users
 */

router.get(ROUTES.USERS, getUsers);
/**
 * @swagger
 * /private/api/user/{id}:
 *   get:
 *     summary: Returns specific user
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: id
 *         required: true
 *         description: The id of the user
 *     responses:
 *       200:
 *         description: the user
 */

router.get(ROUTES.USER, getUser);
/**
 * @swagger
 * /private/api/users:
 *   post:
 *     summary: Creates a new user
 *     tags:
 *       - users
 *     requestBody:
 *       description: The user to create
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                 type: number
 *               role:
 *                 type: number
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *     responses:
 *       201:
 *         description: The newly created user
 */

router.post(ROUTES.USERS, postUser);
/**
 * @swagger
 * /private/api/user/{userId}:
 *   put:
 *     summary: Updates an existing user
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to update
 *     requestBody:
 *       description: The user data to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                 type: number
 *               role:
 *                 type: number
 *             example:
 *               name: New user Name
 *               age: 27
 *     responses:
 *       200:
 *         description: The updated user
 */

router.put(ROUTES.USER, putUser);
/**
 * @swagger
 * /private/api/user/{userId}:
 *   delete:
 *     summary: Deletes an existing user
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to delete
 *     responses:
 *       204:
 *         description: The user was successfully deleted
 *       404:
 *         description: The user with the specified ID was not found
 */

router.delete(ROUTES.USER, deleteUser);

module.exports = router;
