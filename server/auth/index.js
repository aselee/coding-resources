const jwt = require('jsonwebtoken');
const { secret } = require('../config');

exports.loginRequired = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secret, (error, decode) => {
      if (error) {
        res.json({
          success: false,
          error,
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Not authorized. Please login first',
      error,
    });
  }
};