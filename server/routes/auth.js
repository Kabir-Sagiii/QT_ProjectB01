const express = require("express");
const { signin, signup } = require("../controllers/authController");

const route = express.Router();

route.post("/sign-in", (req, res) => {
  signin(req, res);
});
//http://localhost:5000/auth/sign-in

route.post("/sign-up", (req, res) => {
  signup(req, res);
});
//http://localhost:5000/auth/sign-up

module.exports = route;
