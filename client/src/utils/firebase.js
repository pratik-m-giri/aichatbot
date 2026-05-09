import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMXH7ssJ3jRJzqA6qbnX7OBwneCvFsXzI",
  authDomain: "ai-interview-e94b0.firebaseapp.com",
  projectId: "ai-interview-e94b0",
  storageBucket: "ai-interview-e94b0.firebasestorage.app",
  messagingSenderId: "1091010501138",
  appId: "1:1091010501138:web:ae121dde53635bea08d6cb",
  measurementId: "G-SDT9YJ2LB0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };