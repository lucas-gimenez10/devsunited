import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { auth } from './firebaseConfig'

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async() => {
  try{
    const userCredentials = await signInWithPopup(auth, provider)
    return userCredentials.user
  } catch(err) {
    console.log(err.message)
  }

}

export const logout = async() => {
  
  try{
    await signOut(auth);
  } catch(err) {
    console.log(err)
  }

}

export const handleAuthChange = async (callback) => {
  const unSuscribe = await onAuthStateChanged(auth, callback);
  return unSuscribe;
}

// // fx login
// export const signIn = async(email, password) => {
//   try{
//     const usersData = await signInWithEmailAndPassword(auth, email, password)
    
//     return usersData
//   } catch(err) {
//     console.log(err)
//   }

// }

// // fx signup
// export const createAccount = async(email, password) => {
//   try{
//     const usersData = await createUserWithEmailAndPassword(auth, email, password)
    
//     return usersData
//   } catch(err) {
//     console.log(err)
//   }

// }
// // fx logout