import { useEffect, useState} from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  //states
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  //get realtime data for document
  useEffect(() => {
    const firestore = projectFirestore.collection(collection).doc(id)
    firestore.onSnapshot((snapshot) => {
      //log snapshot.data()
      // console.log(snapshot.data())
      //check if there is data
      if(snapshot.data()){
        //store it in state
        setDocument({...snapshot.data(), id:snapshot.id})
        //set err
        setError(null)
      } else {
        setError('No Document Exist')
      }

    }, (err) => {
      console.log(err.message)
      setError('Failed to get document')
    })
  }, [collection, id])

  return {document, error}

}