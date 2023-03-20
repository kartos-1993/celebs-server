var admin = require("firebase-admin");


const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://celebs-db-3371a.firebaseio.com",
  });
  


module.exports = admin;

