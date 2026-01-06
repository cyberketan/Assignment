


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChnaWSCIZeyIve_Ri2fPr8C8n4mWgDN-w",
  authDomain: "userinfo-f70f3.firebaseapp.com",
  projectId: "userinfo-f70f3",
  storageBucket: "userinfo-f70f3.firebasestorage.app",
  messagingSenderId: "113392430472",
  appId: "1:113392430472:web:39fe1615d4a7af6f08de3d",
  measurementId: "G-18D5W7EQ5F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
