/*
author: Manpreet Sandhu
File: firebase.js
*/
import firebase from "firebase";

//firebase credentials
const firebaseConfig = {
  apiKey: "**** COPY FROM FIREBASE *****",
  authDomain: "l**** COPY FROM FIREBASE *****",
  projectId: "**** COPY FROM FIREBASE *****",
  storageBucket: "**** COPY FROM FIREBASE *****",
  messagingSenderId: "**** COPY FROM FIREBASE *****",
  appId: "**** COPY FROM FIREBASE *****",
};

//initialize firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//connect firebase to DB
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
