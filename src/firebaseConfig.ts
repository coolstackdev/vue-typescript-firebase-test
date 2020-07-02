import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyD_E6klnrchg1hN0ORdpaBA8q_PQLhF27E",
  authDomain: "restapi-agile-principle.firebaseapp.com",
  databaseURL: "https://restapi-agile-principle.firebaseio.com",
  projectId: "restapi-agile-principle",
  storageBucket: "restapi-agile-principle.appspot.com",
  messagingSenderId: "1091957232499",
  appId: "1:1091957232499:web:45b5fd59517848faac6b06",
  measurementId: "G-LGQ5G9C4F4"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const principlesCollection = db.collection("principles");

export default { db, principlesCollection };
