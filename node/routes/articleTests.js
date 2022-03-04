const express = require("express");
const router = express.Router();

router.get("/", (rep, res) => {
  res.send("In articles test");
});

module.exports = router;
