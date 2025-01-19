const express = require('express')
const router = express.Router()

const {
    create,
    list,
    remove,
    read,
    update
    
} = require("../controllers/productAttribute")

//middleware
const{authCheck, adminCheck} = require("../middlewares/auth")

router.post("/product-attribute", authCheck,adminCheck, create )
router.get("/product-attribute", list )
router.get("/product-attribute/:slug", read);
router.put("/product-attribute/:slug", authCheck, adminCheck, update);
router.delete("/product-attribute/:slug", authCheck, adminCheck, remove);
// router.get("/category/subs/:_id", getSubs);

module.exports = router