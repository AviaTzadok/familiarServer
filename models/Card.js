const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("Card", cardSchema);
