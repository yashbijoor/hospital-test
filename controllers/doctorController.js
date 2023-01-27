const allModels = require("../utils/allModels");
const doctorSchema = require("../models/doctorModel");

const mongoose = require("mongoose");

const Doctor = new mongoose.model("Doctor", doctorSchema);

exports.signUpController = async (req, res, next) => {
  const newDoctor = new Doctor({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    specialisation: req.body.specialisation,
    experience: req.body.experience,
  });

  newDoctor.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ Status: "Successfully entered a new doctor" });
    }
  });
};

exports.signInController = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Doctor.findOne({ email: email }, (err, foundUser) => {
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
