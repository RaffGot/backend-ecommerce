// generate token
const jwt = require("jsonwebtoken");

const generateToken = (user, secret, expiresIn) => {
  const { _id, name, email, role } = user;
  console.log("expiresIn : ", expiresIn);
  const payload = {
    id: _id,
    name,
    email,
    role,
  };
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = generateToken;
