import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCKF5oFKYoq5P0C17deplicBeE8ikU0fGM",
    authDomain: "e-commerce-saavedra-4674a.firebaseapp.com",
    projectId: "e-commerce-saavedra-4674a",
    storageBucket: "e-commerce-saavedra-4674a.appspot.com",
    messagingSenderId: "847954543950",
    appId: "1:847954543950:web:5a781e8832a8c9e96c4a1f"
  };

  const app = initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }


  export function getFireStore(){
      return firebase.firestore(app)
  }



