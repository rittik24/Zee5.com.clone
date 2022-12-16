
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDsMsw8ZDgFuBgmLoz-aWmzs0vh8YGZ6IU",
  authDomain: "login-signup-3bbd7.firebaseapp.com",
  projectId: "login-signup-3bbd7",
  storageBucket: "login-signup-3bbd7.appspot.com",
  messagingSenderId: "1028108779438",
  appId: "1:1028108779438:web:a1731b185acc91288ad23f",
  measurementId: "G-GE34HF6KQ4"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app
