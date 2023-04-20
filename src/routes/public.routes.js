const express = require("express");
const app = express();
const { ROUTES } = require("../utils/constants");
const router = express.Router();

const authRoutes = require("./auth.routes");

router.use(ROUTES.API, authRoutes);

module.exports = router;
