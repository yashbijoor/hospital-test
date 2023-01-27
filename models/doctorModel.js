const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, require: true },
  specialisation: { type: String, require: true },
  experience: { type: String, require: true },
});

module.exports = doctorSchema;
