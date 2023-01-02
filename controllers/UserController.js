const User = require("../models/user");

exports.getUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
