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
const publicRouter = require("./src/routes/public.routes");
const privateRouter = require("./src/routes/private.routes");
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

app.use(ROUTES.PUBLIC, publicRouter);
app.use(ROUTES.PRIVATE, privateRouter);

app.listen(port, () => console.log(`Exemple app listening on port :${port}`));
