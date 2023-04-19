const {
  allUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
} = require("../services/user.service");

//get all Users
const getUsers = async (req, res) => {
  const users = await allUsers();
  return res.json({ data: users, message: "Users found !" });
};

// get spesific User
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.json({ data: user, message: "User found !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// create User
const postUser = async (req, res, next) => {
  try {
    const newUser = await createUser(req.body);
    return res.json({ data: newUser, message: "User Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// update User
const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await updateUser(id, req.body);
    return res.json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//delete User
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUserById(id);
    return res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
