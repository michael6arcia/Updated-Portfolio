// Dependencies
var express = require("express");
var path = require("path");

var app = express();

// Middleware
app.use(express.static('public'));

// Routes
// ======

// 'Index' Route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// 'About Me' Route
app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/about.html"));
});

// 'Contact' Route
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/contact.html"));
});

// 'Portfolio' Route
app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/portfolio.html"));
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log("App running on port 3000!");
});