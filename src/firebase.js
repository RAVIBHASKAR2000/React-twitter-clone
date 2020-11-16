import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBD5hR-LNNqzuYnDqrC6rcNUK9XUWG0y4A",
  authDomain: "twitter-clone-329b3.firebaseapp.com",
  databaseURL: "https://twitter-clone-329b3.firebaseio.com",
  projectId: "twitter-clone-329b3",
  storageBucket: "twitter-clone-329b3.appspot.com",
  messagingSenderId: "513325954558",
  appId: "1:513325954558:web:be6ca17cf3b3774ee47caf"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;
