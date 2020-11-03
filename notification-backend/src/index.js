require("dotenv").config();
const { EventEmitter } = require("events");
const mediator = new EventEmitter();
const config = require("./config");

const events = require("./events");
events(mediator);

// config.db.connect(mediator);
const server = config.server.start(mediator);
