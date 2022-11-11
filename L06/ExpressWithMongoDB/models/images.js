const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  }
});

module.exports = mongoose.model("Images", schema);
