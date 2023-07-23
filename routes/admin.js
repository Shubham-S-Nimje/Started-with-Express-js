const expresss = require("express");
const path = require("path");
const viewPath = require("../utils/path");
const router = expresss.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("in the middleware add-product");
  res.sendFile(viewPath('add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  // res.send("<h1>Hello from Express JS path!.</h1>");
  res.redirect("/");
});

module.exports = router;
