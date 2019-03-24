import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/storage"

var config = {
    apiKey: "AIzaSyDA5CTaB0eu2ZjN67ltXZ0BOePK8nyfAs0",
    authDomain: "portafolio-armando.firebaseapp.com",
    databaseURL: "https://portafolio-armando.firebaseio.com",
    projectId: "portafolio-armando",
    storageBucket: "portafolio-armando.appspot.com",
    messagingSenderId: "868480909766"
};


firebase.initializeApp(config);

const db = firebase.database();
const store = firebase.storage()

export {
  db,
  store
};