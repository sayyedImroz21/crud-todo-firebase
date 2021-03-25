import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAfDylbjym8DAebwTmqaBMcNV-fa5I4CbI",
    authDomain: "todoapp-d1594.firebaseapp.com",
    projectId: "todoapp-d1594",
    storageBucket: "todoapp-d1594.appspot.com",
    messagingSenderId: "525119744870",
    appId: "1:525119744870:web:38a04a2fcd2b36386736a7",
    measurementId: "G-ZGFPWJCWN6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;