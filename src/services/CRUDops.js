import { db } from '../services/firebaseConfig'
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";

  export const getCollection = (col) => collection(db, col)

  const getDocument = (col, id) => doc(db, col, id)

  export const updateData = async (col, id, data) => {
      const docRef = getDocument(col, id)
      await updateDoc(docRef, data)
  }

  export const deleteData = async (col, id) => {
      const docRef = getDocument(col, id)
      await deleteDoc(docRef)
  }

  export const addData = async (col, data) => {
      const collectionRef = getCollection(col)
      const docRef = await addDoc(collectionRef, data)
      return docRef
  }