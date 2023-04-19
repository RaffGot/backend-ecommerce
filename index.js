const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { SWAGGUER_OPTIONS, ROUTES } = require("./src/utils/constants");
const swaggerDocs = require("./src/config/swagger-config");
const { authMiddleware } = require("./src/middlewares/auth.middleware");
const productRouter = require("./src/routes/product.routes");
const userRouter = require("./src/routes/user.routes");
const authRouter = require("./src/routes/auth.routes");
// user router

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// connect to mongo db database
mongoose
  .connect(process.env.MONGODB_URI + process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then(console.log("connection succeded"))
  .catch((err) => console.log("Connection db failed : ", err));

// swagger config
app.use(
  SWAGGUER_OPTIONS.API_DOCS,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

app.get(ROUTES.HOME, (req, res) => {
  res.send("hello world !");
});

app.use(ROUTES.API, authRouter);
app.use(ROUTES.API, authMiddleware);
app.use(ROUTES.API, userRouter);
app.use(ROUTES.API, productRouter);

app.listen(port, () => console.log(`Exemple app listening on port :${port}`));
