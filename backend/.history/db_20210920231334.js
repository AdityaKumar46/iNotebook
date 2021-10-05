const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }