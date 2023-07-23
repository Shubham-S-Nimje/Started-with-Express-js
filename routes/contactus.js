const expresss = require("express");
const path = require("path");
const viewPath = require("../utils/path");
const router = expresss.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(viewPath('contactus.html'));
});

router.post("/success", (req, res, next) => {
  res.send("<h1>Form successfuly filled!.</h1>");
});

module.exports = router;
