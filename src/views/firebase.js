import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA6pX-bfStaCONL79N79N41A6aFOW2IU48",
  authDomain: "knjiznica-3eeb7.firebaseapp.com",
  projectId: "knjiznica-3eeb7",
  storageBucket: "knjiznica-3eeb7.appspot.com",
  messagingSenderId: "368200238328",
  appId: "1:368200238328:web:0c094099daf89ac340e70d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };
