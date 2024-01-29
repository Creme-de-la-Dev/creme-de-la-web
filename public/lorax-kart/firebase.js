// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA9c0WO33WNDCfc8zUvwTuEVVjY69lYYOQ",
  authDomain: "lorax-kart.firebaseapp.com",
  databaseURL: "https://lorax-kart.firebaseio.com",
  projectId: "lorax-kart",
  storageBucket: "lorax-kart.appspot.com",
  messagingSenderId: "493140402150",
  appId: "1:493140402150:web:bddd4afa577baf733b8027",
  measurementId: "G-621R0NP9FG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();