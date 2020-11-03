require("dotenv").config();
const { EventEmitter } = require("events");
const mediator = new EventEmitter();
const config = require("../src/config");
const server = require("../src/config/server");
const events = require("../src/events");
events(mediator);

let instance;

describe("start server", () => {
  it("start server", (done) => {
    instance = server.start(mediator);
    setImmediate(done());
  });
  it("stop server", (done) => {
    server.close(mediator, instance);
    setImmediate(done());
  });
});
