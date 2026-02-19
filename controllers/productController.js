const productService = require('../services/productService');

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = productService.getAllProducts();
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    console.log('Product data received from client:', req.body);
    const result = productService.addProduct(req.body);
    console.log('Product added successfully:', result);
    res.status(201).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = productService.getProductById(id);
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};
