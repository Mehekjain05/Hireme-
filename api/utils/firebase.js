const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBYxwc5qRL6jkLMBqT4KTekxV_0jkECFMU",
    authDomain: "hireme-8c2ec.firebaseapp.com",
    projectId: "hireme-8c2ec",
    storageBucket: "hireme-8c2ec.appspot.com",
    messagingSenderId: "697256166916",
    appId: "1:697256166916:web:66d71493e0ca3d76d0d751",
    measurementId: "G-297GV89ZRD"
  };

const db = firebase.initializeApp(firebaseConfig);

module.exports = db