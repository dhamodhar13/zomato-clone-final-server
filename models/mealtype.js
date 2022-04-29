const mongoose = require("mongoose");

const schema = mongoose.Schema;

const mealTypeSchema = new schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mealtype", mealTypeSchema, "mealtypes");
