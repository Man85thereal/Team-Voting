import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDIsIkwL-v1gxHTh6NPjEhSHypMlyTA-Pk",
  authDomain: "voting-7cebe.firebaseapp.com",
  databaseURL: "https://voting-7cebe-default-rtdb.firebaseio.com",
  projectId: "voting-7cebe",
  storageBucket: "voting-7cebe.appspot.com",
  messagingSenderId: "975433141226",
  appId: "1:975433141226:web:a53f8fe07abd346e57c093"
};
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
