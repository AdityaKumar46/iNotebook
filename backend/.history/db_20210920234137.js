const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

/**async function main() {
    await mongoose.connect(mongoURI, ()=> {

        console.log("connected")

    });
  }*/

  const mongoURI = mongoose.connection;
  mongoURI.on("error", console.error.bind(console, "connection error: "));
  mongoURI.once("open", function () {
    console.log("Connected successfully");
    });

  module.exports = mongoURI;