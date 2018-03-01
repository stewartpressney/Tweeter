"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

const ObjectId = require('mongodb').ObjectId

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function saveTweet(newTweet, callback) {
      if (!newTweet) return;
      db.collection("tweets").insertOne(newTweet);
      callback(null, true)
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function getTweets(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, tweets);
      });
    }
  };
};
