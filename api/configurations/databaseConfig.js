const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

module.exports = database;