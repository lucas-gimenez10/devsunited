import { auth } from './firebaseConfig'
import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { setDocument, getDataById } from "./CRUDops";

const provider = new GoogleAuthProvider();

const addUserToFirestore = async (user) => {
  const { uid, displayName, email, photoURL } = user;
  const userExist = await getDataById("users", uid);
  if (!userExist) {
    await setDocument("users", uid, {
      name: displayName,
      email: email,
      photo: photoURL
    });
  }
};

export const loginWithGoogle = async () => {
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    addUserToFirestore(userCredentials.user)
    console.log(userCredentials.user)
    return userCredentials.user;
  } catch (err) {
    console.log(err.message);
  }
};


export const logout = async() => {
  
  try{
    await signOut(auth);
  } catch(err) {
    console.log(err)
  }

}

export const handleAuthChange = async (callback) => {
  const unSubscribe = await onAuthStateChanged(auth, callback);
  return unSubscribe;
};