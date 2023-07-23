const expresss = require("express");
const path = require("path");
const router = expresss.Router();
const viewPath = require("../utils/path");

router.get("/", (req, res, next) => {
  //   console.log("In the middleware");
  res.sendFile(viewPath('shop.html'));
});

module.exports = router;
