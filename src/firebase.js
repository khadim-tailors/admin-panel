import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
var firebaseConfig = {
  apiKey: "AIzaSyDI9cGmSd6NOwnqTH62wY_eMZDmDN6riNE",
  authDomain: "khadim-tailors.firebaseapp.com",
  projectId: "khadim-tailors",
  storageBucket: "khadim-tailors.appspot.com",
  messagingSenderId: "414625762347",
  appId: "1:414625762347:web:9e918193a6b179e84dae6e",
  measurementId: "G-4YPWVSCZFK"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
  // firebase.analytics();
  const storage = firebase.storage();
  export  {
    storage, firebase as default
  }