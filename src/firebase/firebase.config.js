
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5VHJMNmB72I6C1LyRGSgKuCk0WxYuHSk",
  authDomain: "green-plants-53e50.firebaseapp.com",
  projectId: "green-plants-53e50",
  storageBucket: "green-plants-53e50.firebasestorage.app",
  messagingSenderId: "282246505016",
  appId: "1:282246505016:web:7f70963ebb78f3a0cebccd"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app