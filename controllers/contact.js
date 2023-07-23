const viewPath = require("../utils/path");

exports.addContact = (req, res, next) => {
  res.sendFile(viewPath("contactus.html"));
};

exports.addSucess = (req, res, next) => {
  res.send("<h1>Form successfuly filled!.</h1>");
};
