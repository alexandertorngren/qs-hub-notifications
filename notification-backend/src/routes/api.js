const router = require("express").Router();
const endpoint = "/api";

router.get("/", async (req, res) => {
  return res.json({
    endpoint: endpoint,
    success: true,
    statusCode: res.statusCode,
  });
});

module.exports = router;
