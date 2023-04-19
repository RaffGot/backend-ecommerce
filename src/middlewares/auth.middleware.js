const jwt = require("jsonwebtoken");
const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
} = require("../config/jwt.config");

function authMiddleware(type) {
  return (req, res, next) => {
    const auth = req.headers["Authorization"] || req.headers["authorization"];

    if (!auth) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [authType, token] = auth.split(" ");

    if (!authType || !token || authType.toLowerCase() !== type.toLowerCase()) {
      return res.status(401).json({ message: "Invalid authorization header" });
    }

    const secret =
      type.toLowerCase() === "bearer" ? JWT_ACCESS_SECRET : JWT_REFRESH_SECRET;

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  };
}

module.exports = { authMiddleware };
