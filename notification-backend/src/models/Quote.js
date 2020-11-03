const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quote = new Schema({
  author: { type: String },
  quote: { type: String, index: { unique: true } },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quote", Quote);
