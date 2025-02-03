// var admin = require("firebase-admin");
import * as admin from "firebase-admin";
import * as firebaseCredential from "../../firebase-cred.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseCredential as any),
    projectId: firebaseCredential.project_id,
    databaseURL: firebaseCredential.database_url,
  });
}
export const firebaseAuth = admin.auth();
