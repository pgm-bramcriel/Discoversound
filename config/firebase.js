import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaRjQHIijNWjmlUyHxxxUAIgHzuIkrODA",
  authDomain: "discover-sound.firebaseapp.com",
  projectId: "discover-sound",
  storageBucket: "discover-sound.appspot.com",
  messagingSenderId: "754191023026",
  appId: "1:754191023026:web:89c65b0420894b55d342ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();