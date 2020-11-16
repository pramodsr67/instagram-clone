// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiE4Oj9zPsAWQDE5AoYRa-7X82zloauX0",
  authDomain: "instagram-clone-8504d.firebaseapp.com",
  databaseURL: "https://instagram-clone-8504d.firebaseio.com",
  projectId: "instagram-clone-8504d",
  storageBucket: "instagram-clone-8504d.appspot.com",
  messagingSenderId: "1092004958862",
  appId: "1:1092004958862:web:ed0177fcddb0c14459afdf",
  measurementId: "G-BJPYBK27LB",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
