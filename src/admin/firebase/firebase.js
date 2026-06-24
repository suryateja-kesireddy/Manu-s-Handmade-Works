import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_CLktbyzxRrORWCcOvM8sEUowFMc1eUg",
  authDomain: "manus-handmade-works.firebaseapp.com",
  projectId: "manus-handmade-works",
  storageBucket: "manus-handmade-works.firebasestorage.app",
  messagingSenderId: "936857419234",
  appId: "1:936857419234:web:c96d477f599616492ccdbb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;