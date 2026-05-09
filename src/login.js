// Purpose: All-in-One Login & Firebase Connection
// Location: src/login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// PASTE YOUR FIREBASE CONFIG HERE (from your Firebase Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyBgq_ooBeEN4noEyIxYPLVokgM6RjCO648",
  authDomain: "gms-task-tracker.firebaseapp.com",
  projectId: "gms-task-tracker",
  storageBucket: "gms-task-tracker.firebasestorage.app",
  messagingSenderId: "790880979860",
  appId: "1:790880979860:web:6faee2a6e56955af3c1d81",
  measurementId: "G-5TRHQMS039"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const loginEmployee = async (id, pin) => {
  const q = query(
    collection(db, "employees"), 
    where("employeeId", "==", id), 
    where("pin", "==", Number(pin))
  );

  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data(); 
  } else {
    throw new Error("Invalid ID or PIN");
  }
};
