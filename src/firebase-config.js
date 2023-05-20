import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRV_viaEN21OAf-LELO_jJKqlWmTnJddk",
    authDomain: "imdbsys-final-project.firebaseapp.com",
    projectId: "imdbsys-final-project",
    storageBucket: "imdbsys-final-project.appspot.com",
    messagingSenderId: "972227445240",
    appId: "1:972227445240:web:3a752ca49c10c72be0d60d",
    measurementId: "G-70E66XLVFC"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);