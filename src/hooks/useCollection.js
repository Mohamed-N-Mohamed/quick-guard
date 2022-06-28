import { useEffect, useState} from "react"
import { projectFirestore } from "../firebase/config"
export const useCollection = (collection) => {

  //states
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    let ref = projectFirestore.collection(collection)
      ref.onSnapshot(snapshot => {
      let results = []
      //find data and store in results array
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })
   
  }, [collection])

  return { documents, error }

  
  

}