"use strict"

//set constant paramaters
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

//Connect to Mongo
MongoClient.connect(MONGODB_URI, (err, db) => {

  console.log(db);

  if (err) {
    console.error(`${MONGODB_URI} says: eye dinneh ken fit bee makin yer knickers ina twst.`);
    throw err;
  }

  //Connection Established
  console.log(`${MONGODB_URI} Fitlike, tak uf yer shoues, an dinneh ye brek nythin!`);




  function getTweets(callback) {
    // body...
    db.collection("tweets").find().toArray(callback);
  };


  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging Each Tweet: ");
    for (let tweet of tweets) {
      console.log(tweet);
    }
    //End of Program
    db.close();
  });

});