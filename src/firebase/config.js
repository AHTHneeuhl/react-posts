import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8ozWoZ2vWiZUdiNpN4IODHj2eYduYlu0",
  authDomain: "reactposts-2c6e0.firebaseapp.com",
  projectId: "reactposts-2c6e0",
  storageBucket: "reactposts-2c6e0.appspot.com",
  messagingSenderId: "818201475700",
  appId: "1:818201475700:web:0d2e95872d782967e1af21",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };
