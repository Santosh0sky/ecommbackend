const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
  const result = productService.getAllProducts();
  res.send(result);
};

exports.addProduct = (req, res) => {
  console.log('Product data received from client:', req.body);
  const result = productService.addProduct(req.body);
  console.log('Product added successfully:', result);
  res.send(result);
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const result = productService.getProductById(id);
  res.send(result);
};
