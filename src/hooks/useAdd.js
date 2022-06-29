import { projectFirestore } from "../firebase/config"
import { useState } from 'react'

export const useAdd = (collection) => {
  //state
  const [error, setError] = useState(null)
  
  const addData = async (first, last, location, description, rate) => {
    //add to collection
    try{
      const firestore = projectFirestore.collection(collection)
      //add values into the database
      firestore.add({
        first,
        last,
        location,
        description,
        rate,
        approved: false
      })
    } catch (error){
      console.log(error)
      //set error
      setError(error)
    }
  }
  return {addData, error}
}