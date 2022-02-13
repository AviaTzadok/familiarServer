//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./models/connectDB");
const { usersRoute, cardsRoute } = require("./routes/router");
const authJWTWeb = require("./middlewares/JWT.js");

//Uses
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Connect the Database
connectDB().then(() => {
  console.log("****Connected to DB successfully******");
});

//Listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Use routes
app.use("/api/user", authJWTWeb, usersRoute);
app.use("/api/card", authJWTWeb, cardsRoute);
