const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// landing page
app.get("/", (req, res) => {
    res.render("pages/index");
});

// mock page for submit boba review
app.get("/mock_submit", (req, res) => {
    res.render("pages/mock_submit");
})

// place where users their boba review
app.get("/journal", (req, res) => {
    res.render("pages/journal");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);