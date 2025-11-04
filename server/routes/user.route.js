const express = require("express");
const { userClerkController } = require("../controller/user.controller");

const router = express.Router();

router.post("/clerk-user-webhook", userClerkController);

module.exports = router;
