//import firebase from "firebase";
//import "firebase/firestore";

import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/auth"
import "firebase/compat/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBhiC55oW4kftfif9htOFWEH7ETreksTnI",
  authDomain: "stafferregister.firebaseapp.com",
  projectId: "stafferregister",
  storageBucket: "stafferregister.appspot.com",
  messagingSenderId: "398873459773",
  appId: "1:398873459773:web:31bec64f9962fa03ccbe54"
  };
  
  
  
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  //const database = firebase.firestore();
  //export default database;




  export default firebase;