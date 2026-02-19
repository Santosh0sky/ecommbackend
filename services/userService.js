// In-memory storage for users
let users = [];

const AppError = require('../utils/AppError');

exports.getAllUsers = () => {
  return users;
};

exports.addUser = (userData) => {
  if (!userData.name || !userData.email) {
    throw new AppError('User name and email are required', 400);
  }
  const user = {
    id: users.length + 1,
    ...userData,
    createdAt: new Date()
  };
  users.push(user);
  return user;
};

exports.getUserById = (id) => {
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};