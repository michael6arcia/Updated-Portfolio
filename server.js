// Dependencies
var express = require("express");
var path = require("path");

var app = express();

// Routes
// ======

// 'Index' Route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

// 'Contact Me' Route
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname + "./public/contact.html"));
});

// 'Portfolio' Route
app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname + "./public/portfolio.html"));
});

// Listen on port 3000
app.listen(3000, function () {
    console.log("App running on port 3000!");
});