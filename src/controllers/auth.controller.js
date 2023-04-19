const authService = require("../services/auth.service");
const { authMiddleware } = require("../middlewares/auth.middleware");

async function authController(req, res, next) {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user } = await authService.authenticate(
      email,
      password
    );

    res.json({
      userData: { name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  authController,
  authMiddleware,
};
