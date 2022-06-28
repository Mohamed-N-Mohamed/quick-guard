import { projectFirestore } from "../firebase/config"
import { useState } from 'react'

export const useAdd = (collection) => {
  const [error, setError] = useState(null)

  const addData = async (first, last, location, description, rate) => {
    //add to collection
    try{
      let ref = projectFirestore.collection(collection)
      ref.add({
        first,
        last,
        location,
        description,
        rate,
        approved: false
      })
     

    } catch (error){
      console.log(error)
      setError(error)

    }

  }


  return {addData, error}

}