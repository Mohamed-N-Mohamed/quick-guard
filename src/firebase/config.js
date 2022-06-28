import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDBry1aFUY5Z7snwi0sSKI27upWfDQdEuc",
  authDomain: "quick-guard.firebaseapp.com",
  projectId: "quick-guard",
  storageBucket: "quick-guard.appspot.com",
  messagingSenderId: "320893196700",
  appId: "1:320893196700:web:11e4934f9534bf07fb5059"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

export {projectFirestore, projectStorage}