const express = require("express");
const cors = require("cors");
const createConnection = require("./config/connection");
const app = express();
const AuthRoute = require("./routes/auth");
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRoute);

app.listen(port, () => {
  console.log("Server is Started on Port Number", port);
  createConnection();
});
