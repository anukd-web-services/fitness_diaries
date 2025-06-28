const express = require("express");
const app = express();

const ejsMate = require("ejs-mate");
const path = require("path");

const session = require("./config/session");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Midlleware
app.use(session);
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
