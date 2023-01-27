const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const conn = mongoose.connect("mongodb://localhost:27017/hospitalDB", {
  useNewUrlParser: true,
});

module.exports = conn;
