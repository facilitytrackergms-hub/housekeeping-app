// Purpose: All-in-One Login & Firebase Connection
// Location: src/login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// PASTE YOUR FIREBASE CONFIG HERE (from your Firebase Project Settings)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "gms-task-tracker.firebaseapp.com",
  projectId: "gms-task-tracker",
  storageBucket: "gms-task-tracker.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
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
