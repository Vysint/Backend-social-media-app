const bcrypt = require("bcryptjs");

const User = require("../models/user");


// Registering a new User
exports.registerUser = async (req, res, next) => {
  const { userName, password, firstName, lastName } = req.body;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  const newUser = new User({
    userName,
    password: hashedPassword,
    firstName,
    lastName,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
