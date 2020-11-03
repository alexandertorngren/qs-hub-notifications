const mongoose = require("mongoose");
const { dbSettings } = require("./config");

const connect = (mediator) => {
  mediator.once("boot.ready", () => {
    mongoose.connect(dbSettings.mongoURI, dbSettings.dbParameters);

    const connection = mongoose.connection;

    connection.once("open", () => {
      mediator.emit("db.ready", connection);
    });
  });
};

module.exports = { connect };
