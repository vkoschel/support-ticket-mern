const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('please fill all fields');
  }
  res.send('Register');
});

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login');
});

module.exports = {
  registerUser,
  loginUser,
};
