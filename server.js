const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>See you Space Cowboy</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: trieungochai.dev@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I'm Hai and I love drinking and coding!!");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Tea</li><li>Beer</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
