// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_SxKhVZmSMkRk2HxRE-MwYK4-CQ5J67A",
  authDomain: "module-51-b68e1.firebaseapp.com",
  projectId: "module-51-b68e1",
  storageBucket: "module-51-b68e1.appspot.com",
  messagingSenderId: "789283455316",
  appId: "1:789283455316:web:93f2be40666ae3145c88c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth