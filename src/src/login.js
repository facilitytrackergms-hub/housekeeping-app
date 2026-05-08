// Purpose: Employee Login Logic
// Location: src/login.js

import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export const loginEmployee = async (id, pin) => {
  const q = query(
    collection(db, "employees"), 
    where("employeeId", "==", id), 
    where("pin", "==", Number(pin))
  );

  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data(); // Returns Jenny's data
  } else {
    throw new Error("Invalid ID or PIN");
  }
};
