const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema({
  name: {
    type: String,
    match: /([A-Z]*)/,
    trim: true,
    index: { unique: true },
  },
  value: {
    type: String,
    match: /((&#)[0-9]{3,6})|((&#x)[a-zA-Z0-9]{3,6})/,
    trim: true,
    index: { unique: true },
  },
});

const Symbol = new Schema({
  type: { type: String, match: /([A-Z]*)/ },
  items: [Item],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Symbol", Symbol);
