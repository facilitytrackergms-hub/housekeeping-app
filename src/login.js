// Purpose: Employee Login Logic
// Location: src/login.js

import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const loginEmployee = async (id, pin) => {
  const q = query(
    collection(db, "employees"), 
    where("employeeId", "==", id), 
    where("pin", "==", Number(pin))
  );

  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    // Returns the first employee found (Jenny)
    return querySnapshot.docs[0].data(); 
  } else {
    throw new Error("Invalid ID or PIN");
  }
};
