const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/feed", async function (req, res) {
  try {
    const response = await axios.get(req.query.url);

    return res.send(response.data);
  } catch (err) {
    return res.send(err);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
