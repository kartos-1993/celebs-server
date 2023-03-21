const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, email, picture } = req.user;
  console.log("request object: ", req.user);
  const user = await User.findOneAndUpdate(
    {
      email,
    },
    { name, photoURL: picture },
    { new: true }
  );

  if (user) {
    console.log("USER UPATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name,
      photoURL: picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  const { email } = req.user;
  User.findOne({
    email,
  }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
