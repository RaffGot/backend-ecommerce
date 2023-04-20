const express = require("express");
const { authController } = require("../controllers/auth.controller");
const { ROUTES } = require("../utils/constants");
const router = express.Router();

/**
 * @swagger
 * /public/api/login:
 *   post:
 *     summary: Logs in a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: The user's password
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token
 *                 refreshToken:
 *                   type: string
 *                   description: JWT refresh token
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

router.post(ROUTES.LOGIN, authController);

module.exports = router;
