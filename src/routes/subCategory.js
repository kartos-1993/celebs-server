const express = require("express");
const router = express.Router();

//controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/subCategory");

//middleware
const { authCheck, adminCheck } = require("../middlewares/auth");

router.post("/sub", authCheck, adminCheck, create);
router.get("/subs", list);
router.get("/sub/:slug", read);
router.put("/sub/:slug", authCheck, adminCheck, update);
router.delete("/sub/:slug", authCheck, adminCheck, remove);


module.exports = router;
console.log("routes in subcategory: ", typeof router);
