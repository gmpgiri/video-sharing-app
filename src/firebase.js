import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAI-fdX4Qai9rqfwym8_t3rzUFUHW9xyB0",
  authDomain: "tamilpadamsongs.firebaseapp.com",
  databaseURL: "https://tamilpadamsongs.firebaseio.com",
  projectId: "tamilpadamsongs",
  storageBucket: "tamilpadamsongs.appspot.com",
  messagingSenderId: "3832946775",
  appId: "1:3832946775:web:d93353caa126e3b0758312",
  measurementId: "G-MMT9KEH4S6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
