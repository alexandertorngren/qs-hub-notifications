const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Interval = new Schema({
  start: { type: Date },
  end: { type: Date },
});

const Notification = new Schema({
  heading: { type: String },
  body: { type: String },
  interval: Interval,
  date: { type: Date, default: Date.now },
  creator: Schema.ObjectId,
});

module.exports = mongoose.model("Notification", Notification);
