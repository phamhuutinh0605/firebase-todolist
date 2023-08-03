import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhgVqe5ZdsfeG-fS99STdmIVMhesCo0vo",
  authDomain: "todo-app-d1a95.firebaseapp.com",
  projectId: "todo-app-d1a95",
  storageBucket: "todo-app-d1a95.appspot.com",
  messagingSenderId: "701205202891",
  appId: "1:701205202891:web:32db64e89e9feb5ec6584e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
