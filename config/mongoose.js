// require the library
const mongoose = require("mongoose");
require("dotenv").config();

// retrieve MongoDB connection string from environment variable
const mongodbUrl = process.env.MONGODB_URL;

// connect to the database
mongoose.connect(mongodbUrl);

// acquire the connection (to check if it's successful)
const db = mongoose.connection;

// handle error
db.on("error", function (err) {
  console.error("MongoDB connection error:", err.message);
});

// up and running, then print the message
db.once("open", function () {
  console.log("Successfully connected to the MongoDB database");
});

// export the connection
module.exports = db;
