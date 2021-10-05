const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

async function main() {
    await mongoose.connect(mongoURI, ()=> {

        console.log("connected")

    });
  }

  const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
    });

  module.exports = main;