const config = require("../config");

module.exports = (mediator) => {
  console.log("--- Start Service ---");
  console.log("Connecting to repository...");

  process.on("uncaughtException", (err) => {
    console.error("Unhandled Exception", err);
  });

  process.on("uncaughtRejection", (err, promise) => {
    console.error("Unhandled Rejection", err);
  });

  mediator.on("db.ready", (db) => {
    console.log(`MongoDB database connection established successfully`);
  });

  mediator.on("server.ready", (server) => {
    console.log(
      `Server is up and running on port ${config.serverSettings.port}`
    );
  });

  mediator.on("server.closed", (db) => {
    console.log(`Server is now OFFLINE`);
  });

  mediator.emit("boot.ready");
};
