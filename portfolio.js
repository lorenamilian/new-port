const express = require("express");

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));

app.get("/", function(request, response) {
  response.render("main.ejs");
});

app.get("/contact", function(request, response) {
  response.render("contact.ejs");
});

app.get("/projects", function(request, response) {
  response.render("projects.ejs");
});

//
app.listen(process.env.PORT || 5000);
