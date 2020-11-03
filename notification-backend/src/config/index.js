const db = require("./mongo");
const server = require("./server");
const { dbSettings, serverSettings } = require("./config");

module.exports = Object.assign({}, { db, server, dbSettings, serverSettings });
