import { useEffect, useState} from "react"
import { projectFirestore } from "../firebase/config"
export const useCollection = (collection) => {

  //states
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const firestore = projectFirestore.collection(collection)
      firestore.onSnapshot(snapshot => {
      //log snapshot
      // console.log(snapshot)  
      let results = []
      //find data and store in results array
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      //set error
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })
   
  }, [collection])
  return { documents, error }

}