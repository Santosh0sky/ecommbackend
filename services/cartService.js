// In-memory storage for carts
let carts = [];

const AppError = require('../utils/AppError');

exports.getCartForUser = (userId) => {
  const cart = carts.find(c => c.userId === parseInt(userId));
  if (!cart) {
    throw new AppError('Cart not found for this user', 404);
  }
  return cart;
};

exports.addProductToCart = (userId, productData) => {
  let cart = carts.find(c => c.userId === parseInt(userId));
  if (!cart) {
    cart = { userId: parseInt(userId), items: [] };
    carts.push(cart);
  }
  if (!productData.productId || !productData.quantity) {
    throw new AppError('Product ID and quantity are required', 400);
  }
  cart.items.push(productData);
  return cart;
};