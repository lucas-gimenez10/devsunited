import { db } from '../services/firebaseConfig'
import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
  } from "firebase/firestore";
  
  const getDocument = (col, id) => doc(db, col, id)

  export const getCollection = (col) => collection(db, col)

  // get data
  export const getData = async (col) => {
    const collectionRef = getCollection(col);
    const snapData = await getDocs(collectionRef);
    const data = snapData.map((doc) => doc.data());
    return data;
  };

  //get Data by ID
export const getDataById = async (col, id) => {
    const docRef = getDocument(col, id);
    const snapData = await getDoc(docRef);
    const data = snapData.data();
    return data;
  };

  // update data
  export const updateData = async (col, id, data) => {
      const docRef = getDocument(col, id)
      await updateDoc(docRef, data)
  }

  // delete data
  export const deleteData = async (col, id) => {
      const docRef = getDocument(col, id)
      await deleteDoc(docRef)
  }

  // add data
  export const addData = async (col, data) => {
      const collectionRef = getCollection(col)
      const docRef = await addDoc(collectionRef, data)
      return docRef
  }

//set Document
export const setDocument = async (col, id, data) => {
    const docRef = getDocument(col, id);
    const docSnapshot = await setDoc(docRef, data);
    return docSnapshot;
  };

//subscribe to data
export const getSubscription = async (col, callback) => {
    const collectionRef = getCollection(col);
    //const unsubscribe = onSnapshot(collectionRef, callback);
    const unsubscribe = await onSnapshot(collectionRef, callback);
    return unsubscribe;
  };

// get username - CONSULTAR FAUS
export const getUsername = async (user) => {
 let usn = await getDataById('users', user.uid).then(res => res)
 const username = usn.username
 console.log(username)
  return username
}