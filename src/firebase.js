import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdX4WG3_RDvD1Fv-vom6nds00vTv_KPkQ",
    authDomain: "clone-993a5.firebaseapp.com",
    databaseURL: "https://clone-993a5.firebaseio.com",
    projectId: "clone-993a5",
    storageBucket: "clone-993a5.appspot.com",
    messagingSenderId: "331040970878",
    appId: "1:331040970878:web:b969f787c6656c4acae02f",
    measurementId: "G-EESBCV8RME"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };