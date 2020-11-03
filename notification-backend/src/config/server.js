// Express
const config = require("./config");
const express = require("express");
const cors = require("cors");
const https = require("https");
const helmet = require("helmet");
const { router, api } = require("../routes");

const start = (mediator) => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Setup routes
  app.use("/", router);
  app.use("/api", api);

  // Handle Errors
  app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") !== "production" ? err : {};

    // Render the error page
    res.status(err.status || 500);
    console.error(`Error: ${err.message}`);
    res.json({ error: `Error: ${err.message}` });
  });

  return https
    .createServer(config.serverSettings.ssl, app)
    .listen(config.serverSettings.port, () => {
      mediator.emit("server.ready");
    });
};

const close = (mediator, server) => {
  server.close(() => {
    mediator.emit("server.closed");
  });
};
module.exports = Object.assign({}, { start, close });
