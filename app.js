const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  //   console.log("in the middleware add-product");
  res.send(
    '<form action="/products" method="POST"><input type="text" name="title"/> <input type="number" name="size"/> <button type="submit">Submit</button></form>'
  );
});

app.use("/products", (req, res, next) => {
  console.log(req.body);
  // res.send("<h1>Hello from Express JS path!.</h1>");
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("In the middleware");
  res.send("<h1>Hello from Express JS path!.</h1>");
});

app.listen(4000);
