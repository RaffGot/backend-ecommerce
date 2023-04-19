const userModel = require("../models/user.model");
const passwordCrypt = require("../utils/functions");
const {
  UserNotFoundError,
  UserDeletionError,
  UserCreationError,
  UserUpdateError,
} = require("../utils/errors/users.errors-handler");

// get  all users
const allUsers = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    throw new Error(
      `(${error.name}) Error getting all users: ${error.message}`
    );
  }
};

// get user
const getUserById = async (id) => {
  try {
    const user = userModel.findById(id);
    if (!user) {
      throw new UserNotFoundError(
        `(${error.name}) User with ID ${id} not found`
      );
    }
    return user;
  } catch (error) {
    throw new Error(
      `(${error.name}) Error getting user by ID : ${error.message}`
    );
  }
};

// create user
const createUser = async (userData) => {
  try {
    const { password: pwd } = userData;
    const password = await passwordCrypt(pwd);
    userData = { ...userData, password };
    const newUser = new userModel(userData);
    return await newUser.save();
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new UserCreationError(
        `(${error.name}) Invalid user data: ${error.message}`
      );
    } else {
      throw new UserCreationError(
        `(${error.name}) Error creating user: ${error.message}`
      );
    }
  }
};

// update user
const updateUser = async (id, updatedData) => {
  try {
    const { password: pwd } = userData;
    const password = await passwordCrypt(pwd);
    userData = { ...userData, password };
    const userUpdated = await userModel.findByIdAndUpdate(id, updatedData);
    if (!userUpdated) {
      throw new UserNotFoundError(
        `(${error.name}) user with ID ${id} not found`
      );
    }
    return userUpdated;
  } catch (error) {
    throw new UserUpdateError(
      `(${error.name}) Error updating user: ${error.message}`
    );
  }
};

// delete user
const deleteUserById = async (id) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new UserNotFoundError(
        `(${error.name}) user with ID ${id} not found`
      );
    }
    return deletedUser;
  } catch (error) {
    throw new UserDeletionError(
      `(${error.name}) Error deleting user: ${error.message}`
    );
  }
};

module.exports = {
  allUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
};
