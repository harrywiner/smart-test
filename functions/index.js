const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//https://us-central1-ecstatic-doodad-243510.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello Boozer!");
});

var mqtt = require("mqtt");
var express = require("express");

exports.CurtainsUp = functions.https.onRequest((request, response) => {
  var client = mqtt.connect("mqtt://user1:pass@3.10.159.115:51041");

  client.subscribe("kitchen/blind/open", (err) => {
    if (err) throw err;
    client.publish("kitchen/blind/open", "5");
  });

  functions.logger.info("Curtains Up!", { structuredData: true });
  response.send("Curtains Up");
});
