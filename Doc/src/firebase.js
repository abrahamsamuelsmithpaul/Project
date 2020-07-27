import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBZtI7GnWk32XaVPKKwIuVy_Ap_BpJXqsg",
    authDomain: "crud-6c3e5.firebaseapp.com",
    databaseURL: "https://crud-6c3e5.firebaseio.com",
    projectId: "crud-6c3e5",
    storageBucket: "crud-6c3e5.appspot.com",
    messagingSenderId: "298154060125",

};
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();