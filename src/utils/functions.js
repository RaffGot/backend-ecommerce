const bcrypt = require("bcrypt");

const passwordCrypt = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = passwordCrypt;
