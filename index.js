const express = require('express');
const path = require("path");
const userFeed = require("./app/user-feed");
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
app.get("/journal", async (req, res) => {
    const feed = await userFeed.get();
    res.render("pages/journal", { user: req.user, feed });
});

app.post("/boba-review", async (req, res) => {
    message = req.body.message;
    // user = req.user;
    userFeed.add(message).then(()=>{
      res.redirect('/journal')
    }).catch (err => {
      res.status(500).send(JSON.stringify({message: err}))
    });
    
  });


app.listen(port);
console.log("Server started at http://localhost:" + port);