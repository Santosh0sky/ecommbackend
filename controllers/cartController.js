const cartService = require('../services/cartService');

exports.getCartForUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = cartService.getCartForUser(userId);
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.addProductToCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = cartService.addProductToCart(userId, req.body);
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};
