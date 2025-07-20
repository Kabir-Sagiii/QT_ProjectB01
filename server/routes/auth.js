const express = require("express");

const route = express.Router();

route.post("/sign-in", (req, res) => {
  res.send("sign in working");
});
//http://localhost:5000/auth/sign-in

route.post("/sign-up", (req, res) => {
  console.log(req.body);
  res.send("sign up");
});
//http://localhost:5000/auth/sign-up

module.exports = route;
