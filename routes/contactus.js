const expresss = require("express");
const router = expresss.Router();
const getContactus = require('../controllers/contact')

router.get("/contactus", getContactus.addContact);

router.post("/success", getContactus.addSucess);

module.exports = router;
