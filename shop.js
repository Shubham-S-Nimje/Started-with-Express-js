const expresss = require("express");

const router = expresss.Router();

router.get("/", (req, res, next) => {
  //   console.log("In the middleware");
  res.send("<h1>Hello from Express JS path!.</h1>");
});

module.exports = router;
