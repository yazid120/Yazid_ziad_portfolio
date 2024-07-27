const express = require("express");
const router = express.Router();
const { sendMail } = require("../controller/emailController");

router.post("/sendemail", sendMail);

module.exports = router;