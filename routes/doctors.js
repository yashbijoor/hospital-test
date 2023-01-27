const express = require("express");
const router = express();

const doctorController = require("../controllers/doctorController");

router.post("/doctor/sign-up", doctorController.signUpController);

router.post("/doctor/sign-in", doctorController.signInController);

module.exports = router;
