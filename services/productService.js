// In-memory storage for products
let products = [];

const AppError = require('../utils/AppError');

exports.getAllProducts = () => {
  return products;
};

exports.addProduct = (productData) => {
  if (!productData.name || !productData.price) {
    throw new AppError('Product name and price are required', 400);
  }
  // Add ID to the product
  const product = {
    id: products.length + 1,
    ...productData,
    createdAt: new Date()
  };
  products.push(product);
  return product;
};

exports.getProductById = (id) => {
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    throw new AppError('Product not found', 404);
  }
  return product;
};
