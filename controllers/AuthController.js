const bcrypt = require("bcryptjs");

const User = require("../models/user");

// Registering a new User
exports.registerUser = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  const newUser = new User({
    email,
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity
        ? res.status(200).json(user)
        : res.status(400).json("You entered the wrong Password");
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
