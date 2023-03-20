var admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
if(process.env.NODE_ENV === "production"){
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://celebs-db-3371a.firebaseio.com"
  })
}else{
  console.log("if run i am for development")

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://celebs-db-3371a.firebaseio.com",
  });
}
  


module.exports = admin;

//  {"err":{"code":"auth/id-token-expired","message":"Firebase ID token has expired.
//  Get a fresh ID token from your client app and try again (auth/id-token-expired).
//   See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token."}}
