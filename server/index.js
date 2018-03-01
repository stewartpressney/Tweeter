"use strict";

// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient   = require("mongodb").MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// The in-memory database of tweets. It's a basic object with an array in it.
MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.error(`${MONGODB_URI} says: eye dinneh ken fit bee makin yer knickers ina twst.`);
    throw err;
  }
  //Connection Established
  console.log(`${MONGODB_URI} Fitlike, tak uf yer shoues, an dinneh ye brek nythin!`);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
