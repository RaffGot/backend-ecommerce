const jwt = require("jsonwebtoken");
const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
} = require("../config/jwt.config");
const { AUTH_TYPES } = require("../utils/constants");

const authMiddleware = () => {
  return (req, res, next) => {
    const auth = req.headers["Authorization"] || req.headers["authorization"];

    if (!auth) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [authType, token] = auth.split(" ");

    if (
      !authType ||
      !token ||
      authType.toLowerCase() !== AUTH_TYPES.BEARER.toLowerCase()
    ) {
      return res.status(401).json({ message: "Invalid authorization header" });
    }

    const secret =
      AUTH_TYPES.BEARER.toLowerCase() === "bearer"
        ? JWT_ACCESS_SECRET
        : JWT_REFRESH_SECRET;

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  };
};

module.exports = {authMiddleware};
