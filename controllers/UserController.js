const User = require("../models/user");

exports.getUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id, "-password");
    if (user) {
      res.status(200).json(user);
    }else{
      res.status(404).json("No such user exists")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
