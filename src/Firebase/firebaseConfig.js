import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase para sua aplicação web
const firebaseConfig = {
  apiKey: "AIzaSyDCkCqqq0cwowkcOoi5EEc3sNxv5BHtaL0",
  authDomain: "jcon-project.firebaseapp.com",
  projectId: "jcon-project",
  storageBucket: "jcon-project.appspot.com",
  messagingSenderId: "28582866836",
  appId: "1:28582866836:web:0d0493ce61bb4abbbf2981"
};

// Inicialização do Firebase
const firebase = initializeApp(firebaseConfig);
const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { firebase, auth };

// Se você precisar do banco de dados, pode inicializá-lo separadamente
const database = getDatabase(firebase);
export { database };
