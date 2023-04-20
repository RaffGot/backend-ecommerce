const express = require("express");
const app = express();
const { ROUTES } = require("../utils/constants");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

const usersRoutes = require("./user.routes");
const productsRoutes = require("./product.routes");

router.use(ROUTES.API, authMiddleware());
router.use(ROUTES.API, usersRoutes);
router.use(ROUTES.API, productsRoutes);

module.exports = router;
