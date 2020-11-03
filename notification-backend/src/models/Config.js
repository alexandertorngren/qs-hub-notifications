const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Config = new Schema({
  host: String,
  httpPort: Number,
  httpsPort: Number,
});

module.exports = mongoose.model("Config", Config);
