import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxsdoZPGxM1wGEfwJ1dhzJRs5kFa3e4Pg",
  authDomain: "crud-fire-react-e9f02.firebaseapp.com",
  projectId: "crud-fire-react-e9f02",
  storageBucket: "crud-fire-react-e9f02.appspot.com",
  messagingSenderId: "757223991411",
  appId: "1:757223991411:web:de89b2bb26a2196b29a206",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);
