import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxsH1FotooU5q1nIggrhI8pCUkiPup-6g",
    authDomain: "udemy-geo-ninjas-524c5.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-524c5.firebaseio.com",
    projectId: "udemy-geo-ninjas-524c5",
    storageBucket: "",
    messagingSenderId: "358780931646",
    appId: "1:358780931646:web:91482b974759dbb8"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()