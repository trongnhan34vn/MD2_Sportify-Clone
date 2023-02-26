
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDjFt5syRMV_ZkoA_uTh54v7WRt6BQAO_g",
  authDomain: "spotify-clone-2754a.firebaseapp.com",
  projectId: "spotify-clone-2754a",
  storageBucket: "spotify-clone-2754a.appspot.com",
  messagingSenderId: "539878465183",
  appId: "1:539878465183:web:5b37c71799578ec062ccaa",
  measurementId: "G-8G20Q1DEWB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}

export default app
