const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const userFeed = require("./app/user-feed");
const data_process = require("./app/data_process");
const app = express();
const port = process.env.PORT || 8080;

// use cookies
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
  console.log(req.body);
  tea_type = req.body.tea_type;
  sugar_p = req.body.sugar_percentage;
  ice_p = req.body.ice_percentage;
  message = req.body.message;
  img_source = data_process.get_img(tea_type);
  console.log(img_source);
  review = {
    tea_type: tea_type,
    sugar_p: sugar_p,
    ice_p: ice_p,
    review: message,
    img_source: img_source
  }

  user = {};
  userFeed.add(user, review).then(() => {
    res.redirect('/journal')
  }).catch(err => {
    res.status(500).send(JSON.stringify({ message: err }))
  });

});


app.listen(port);
console.log("Server started at http://localhost:" + port);