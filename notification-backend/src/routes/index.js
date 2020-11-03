const router = require("express").Router();
const api = require("./api");
const endpoint = "/";

router.get("/", async (req, res) => {
  return res.json({
    endpoint: endpoint,
    success: true,
    statusCode: res.statusCode,
  });
});

module.exports = { router, api };
