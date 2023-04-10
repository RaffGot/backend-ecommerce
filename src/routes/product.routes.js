const express = require("express");
const { ROUTES } = require("../utils/constants");
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/products.contoller");
const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Returns the list of all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: The list of products
 */

router.get(ROUTES.PRODUCTS, getProducts);
/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Returns specific product
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: id
 *         required: true
 *         description: The id of the product
 *     responses:
 *       200:
 *         description: the product
 */

router.get(ROUTES.PRODUCT, getProduct);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       description: The product to create
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               price:
 *                 type: number
 *               countInStock:
 *                 type: number
 *               brand:
 *                 type: string
 *               rating:
 *                 type: number
 *               numReviews:
 *                 type: number
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - countInStock
 *     responses:
 *       201:
 *         description: The newly created product
 */

router.post(ROUTES.PRODUCTS, postProduct);
/**
 * @swagger
 * /api/product/{productId}:
 *   put:
 *     summary: Updates an existing product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to update
 *     requestBody:
 *       description: The product data to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               price:
 *                 type: number
 *               countInStock:
 *                 type: number
 *               brand:
 *                 type: string
 *               rating:
 *                 type: number
 *               numReviews:
 *                 type: number
 *               description:
 *                 type: string
 *             example:
 *               name: New Product Name
 *               price: 29.99
 *     responses:
 *       200:
 *         description: The updated product
 */

router.put(ROUTES.PRODUCT, putProduct);
/**
 * @swagger
 * /api/product/{productId}:
 *   delete:
 *     summary: Deletes an existing product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to delete
 *     responses:
 *       204:
 *         description: The product was successfully deleted
 *       404:
 *         description: The product with the specified ID was not found
 */

router.delete(ROUTES.PRODUCT, deleteProduct);

module.exports = router;
