const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateSubmit: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Forms", formSchema, "forms");