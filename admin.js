const expresss = require("express");

const router = expresss.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("in the middleware add-product");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"/> <input type="number" name="size"/> <button type="submit">Submit</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  // res.send("<h1>Hello from Express JS path!.</h1>");
  res.redirect("/");
});

module.exports = router;
