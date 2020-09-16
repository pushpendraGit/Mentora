const express = require("express");

const app = express();

const port = 8000;
const cors = require("cors");

const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/pssport-jwt-strategy");

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cors());

app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, function (error) {
  if (error) {
    console.log("There is an error while creating the node server");
    return;
  }

  console.log("Your server is running at the port", port);
});
