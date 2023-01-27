const express = require("express");
const router = express();

const patientController = require("../controllers/patientController");

router.post("/patient/sign-up", patientController.signUpController);

router.post("/patient/sign-in", patientController.signInController);

module.exports = router;
