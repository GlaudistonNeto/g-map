import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATTnSfdUbvXES8R_rjYZlCv2LzqWSrGuE",
  authDomain: "curso-vue-aaa35.firebaseapp.com",
  databaseURL: "https://curso-vue-aaa35.firebaseio.com",
  projectId: "curso-vue-aaa35",
  storageBucket: "curso-vue-aaa35.appspot.com",
  messagingSenderId: "469864063252",
  appId: "1:469864063252:web:eef2276c21bc7df6146201",
  measurementId: "G-NPRN4C1CQS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
