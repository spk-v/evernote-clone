import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDN5Op6gQpU0xFJftMXFFrlUFU5c7Vo8Fs",
    authDomain: "evernote-clone-b4f7f.firebaseapp.com",
    databaseURL: "https://evernote-clone-b4f7f.firebaseio.com",
    projectId: "evernote-clone-b4f7f",
    storageBucket: "evernote-clone-b4f7f.appspot.com",
    messagingSenderId: "400026987144",
    appId: "1:400026987144:web:b77a718ef929c0289a4d3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;