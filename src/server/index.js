const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/api/evaluate", function (req, res) {
  fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.query.url}&lang=en`
  )
    .then((response) => response.json())
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
