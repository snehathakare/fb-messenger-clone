import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwSZv7A5lZLmlkPlYccGzAkVhW2Cc3pqE",
  authDomain: "facebook-messenger-clone-d86a5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d86a5.firebaseio.com",
  projectId: "facebook-messenger-clone-d86a5",
  storageBucket: "facebook-messenger-clone-d86a5.appspot.com",
  messagingSenderId: "287653199541",
  appId: "1:287653199541:web:faa7a9f9c5ef57e1f1c8fc",
  measurementId: "G-JXVY54FYFD"
});

const db = firebaseApp.firestore();

export default db;