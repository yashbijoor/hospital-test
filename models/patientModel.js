const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  country: { type: String, require: true },
  ailment: { type: String, require: true },
  admitPeriod: { type: String, require: true },
});

module.exports = patientSchema;
