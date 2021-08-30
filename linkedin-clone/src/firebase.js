import firebase from "firebase";

//firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyCwFGaTIAUf58cC4fPyVBcCAf7K2cQVjqk",
  authDomain: "linkedin-clone-54348.firebaseapp.com",
  projectId: "linkedin-clone-54348",
  storageBucket: "linkedin-clone-54348.appspot.com",
  messagingSenderId: "525465740970",
  appId: "1:525465740970:web:a04b225ac54d15f29292d3",
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
