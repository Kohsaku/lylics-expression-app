import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export const signout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e);
    }
  }
};
