const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://firstuser:BV6KfEXjp8Mbcoo6@cluster0.c5cmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function main() {
    await mongoose.connect(mongoURI);
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`);
});


  module.exports = main;