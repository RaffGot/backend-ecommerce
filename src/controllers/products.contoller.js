const {
  allProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
} = require("../services/product.service");

//get all products
const getProducts = async (req, res) => {
  const products = await allProducts();
  return res.json({ data: products, message: "Products found !" });
};

// get spesific product
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    return res.json({ data: product, message: "Product found !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// create product
const postProduct = async (req, res, next) => {
  try {
    const newProduct = await createProduct(req.body);
    return res.json({ data: newProduct, message: "Product Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// update product
const putProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body);
    return res.json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//delete product
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteProductById(id);
    return res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
