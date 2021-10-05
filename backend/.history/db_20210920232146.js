const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

async function main() {
    await mongoose.connect(mongoURI, ()=> {

        console.log("connected")

    });
  }

  module.exports = main;