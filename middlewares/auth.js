const admin = require("../firebase");
const User = require("../models/user");

//validates token provided by firebase admin sdk
exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken, (checkRevoked = true));
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};

// checks either the user is admin
exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email }).exec();
  console.log("user: ", user)
  if (user.role !== "admin") {
    res.status(403).json({
      error: "Access Denied",
    });
  } else {
    next();
  }
};
