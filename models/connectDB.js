const mongoose = require("mongoose");
const { User } = require("./User");
const { Card } = require("./Card");

const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL;
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, Card };
module.exports = { connectDB, models };
