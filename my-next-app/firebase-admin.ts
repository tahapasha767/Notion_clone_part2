// firebaseAdmin.js
import admin from "firebase-admin";
import {getApp,getApps} from "firebase-admin/app";
import { readFileSync } from "fs";
import { getFirestore } from "firebase-admin/firestore";
const serviceAccount = JSON.parse(
  readFileSync("lubricunt-firebase-adminsdk-fbsvc-27cb116ac7.json", "utf8")
);

const Adminapp=getApps().length===0?admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Optionally add:
  // databaseURL: "https://your-project-id.firebaseio.com",
  // storageBucket: "your-project-id.appspot.com"
}):getApp();
const adminDb = getFirestore(Adminapp);

export { Adminapp, adminDb };
