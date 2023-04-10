
class ProductNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductNotFoundError";
    this.statusCode = 404;
  }
}

class ProductCreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductCreationError";
    this.statusCode = 500;
  }
}

class ProductUpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductUpdateError";
    this.statusCode = 500;
  }
}

class ProductDeletionError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductDeletionError";
    this.statusCode = 500;
  }
}

module.exports = {
  ProductNotFoundError,
  ProductCreationError,
  ProductUpdateError,
  ProductDeletionError,
};
