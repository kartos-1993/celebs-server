const express = require("express");
const passport = require("passport");

//controller
const {
  createOrUpdateUser,
  currentUser,
  currentAdmin,
} = require("../controllers/auth");

console.log("create: ", createOrUpdateUser, "current user: ", currentUser);
const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middlewares/auth");
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "https://scammerdb.netlify.app/",
  }),
  function (req, res) {
    console.log("response", res);
    console.log("req", req);
    res.redirect("https://celebs.com.np");
  }
);

module.exports = router;
