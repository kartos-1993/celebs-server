const express = require("express");
const { app } = require("firebase-admin");
const router = express.Router();

//middlewares
const {adminCheck, authCheck} = require('../middlewares/auth')
//controller
const {create} = require("../controllers/product")

router.post("/product", authCheck,adminCheck, create)

module.exports = router