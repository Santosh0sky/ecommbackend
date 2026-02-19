const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const result = userService.addUser(req.body);
    res.status(201).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = userService.getUserById(id);
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (err) {
    next(err);
  }
};
