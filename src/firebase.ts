import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX6DUNfMbixebv2NUTgyeXQWDSHEw548M",
  authDomain: "lylic-express.firebaseapp.com",
  projectId: "lylic-express",
  storageBucket: "lylic-express.appspot.com",
  messagingSenderId: "614808487362",
  appId: "1:614808487362:web:4da6b7f423f1009a08825b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
