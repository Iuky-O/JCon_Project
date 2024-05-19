import React, { createContext, useState, useEffect } from 'react';
import "firebase/firestore";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  const fetchUserData = async (email) => {
    try {
      const db = getFirestore();
      const usersCollection = collection(db, "usuarios");
      const q = query(usersCollection, where("Email", "==", email));
      const querySnapshot = await getDocs(q);
      const userDataArray = querySnapshot.docs.map(doc => doc.data());
      setUserData(userDataArray[0]);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );

};