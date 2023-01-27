const allModels = require("../utils/allModels");
const mongoose = require("mongoose");
const patientSchema = require("../models/patientModel");

const Patient = new mongoose.model("Patient", patientSchema);

exports.signUpController = async (req, res, next) => {
  const newPatient = new Patient({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    ailment: req.body.ailment,
    admitPeriod: req.body.admitPeriod,
  });

  newPatient.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.signInController = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Patient.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.json({ Status: "Successfully signed in" });
        } else {
          res.json({ Status: "Entered email did not match the password" });
        }
      } else {
        res.json({ Status: "No such email exists in the database" });
      }
    }
  });
};
