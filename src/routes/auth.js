const express = require("express");

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

module.exports = router;
