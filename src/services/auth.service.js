const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateToken = require("../utils/jwt.utils");
const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRATION_TIME,
  REFRESH_TOKEN_EXPIRATION_TIME,
} = require("../config/jwt.config");

async function authenticate(email, password) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("user : ", user.password, password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateToken(
    user,
    JWT_ACCESS_SECRET,
    ACCESS_TOKEN_EXPIRATION_TIME
  );
  const refreshToken = generateToken(
    user,
    JWT_REFRESH_SECRET,
    REFRESH_TOKEN_EXPIRATION_TIME
  );
  return { accessToken, refreshToken, user };
}

module.exports = { authenticate };
