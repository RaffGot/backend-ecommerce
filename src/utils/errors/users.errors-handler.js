class UserNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotFoundError";
    this.statusCode = 404;
  }
}

class UserCreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserCreationError";
    this.statusCode = 500;
  }
}

class UserUpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserUpdateError";
    this.statusCode = 500;
  }
}

class UserDeletionError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserDeletionError";
    this.statusCode = 500;
  }
}

module.exports = {
  UserNotFoundError,
  UserCreationError,
  UserUpdateError,
  UserDeletionError,
};
