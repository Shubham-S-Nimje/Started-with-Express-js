const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const viewPath = require("./utils/path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminRoutes);
app.use(contactusRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(viewPath("page-not-found.html"));
});
app.listen(4000);
