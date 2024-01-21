import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6aeI3eKLUOBFCHDxtswPlHxZh24ZmLFc",
  authDomain: "coder-next-e4d14.firebaseapp.com",
  projectId: "coder-next-e4d14",
  storageBucket: "coder-next-e4d14.appspot.com",
  messagingSenderId: "238749179123",
  appId: "1:238749179123:web:ce0e3b59e3a47f9e38ab86",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
