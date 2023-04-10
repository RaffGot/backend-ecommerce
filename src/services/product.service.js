const productModel = require("../models/product.model");
const {
  ProductNotFoundError,
  ProductCreationError,
  ProductUpdateError,
  ProductDeletionError,
} = require("../utils/errors/products.errors-handler");

// get all products
const allProducts = async () => {
  try {
    const products = await productModel.find();
    return products;
  } catch (error) {
    throw new Error(
      `(${error.name}) Error getting all products: ${error.message}`
    );
  }
};

// get product
const getProductById = async (id) => {
  try {
    const product = await productModel.findById(id);
    if (!product) {
      throw new ProductNotFoundError(
        `(${error.name}) Product with ID ${id} not found`
      );
    }
    return product;
  } catch (error) {
    throw new ProductNotFoundError(
      `(${error.name}) Error getting product by ID: ${error.message}`
    );
  }
};

// create product
const createProduct = async (productData) => {
  try {
    const newProduct = new productModel(productData);
    return await newProduct.save();
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new ProductCreationError(
        `(${error.name}) Invalid product data: ${error.message}`
      );
    } else {
      throw new ProductCreationError(
        `(${error.name}) Error creating product: ${error.message}`
      );
    }
  }
};

// update product
const updateProduct = async (id, updatedData) => {
  try {
    const productUpdated = await productModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!productUpdated) {
      throw new ProductNotFoundError(
        `(${error.name}) Product with ID ${id} not found`
      );
    }
    return productUpdated;
  } catch (error) {
    throw new ProductUpdateError(
      `(${error.name}) Error updating product: ${error.message}`
    );
  }
};

// delete product
const deleteProductById = async (id) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new ProductNotFoundError(
        `(${error.name}) Product with ID ${id} not found`
      );
    }
    return deletedProduct;
  } catch (error) {
    throw new ProductDeletionError(
      `(${error.name}) Error deleting product: ${error.message}`
    );
  }
};
module.exports = {
  allProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
};
