const express = require("express");
const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controllers
const {uploadimages, removeimage} = require("../controllers/cloudinary")

router.post("/uploadimages", authCheck, adminCheck, uploadimages);
router.delete("/removeimage/:id", authCheck, adminCheck, removeimage);

module.exports = router;
