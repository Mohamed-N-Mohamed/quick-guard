import React from 'react'
import { useParams } from 'react-router-dom'
import SecurityInfo from '../components/SecurityInfo';
import { useDocument } from '../hooks/useDocument';

export default function Details() {
  //states
  const {id} = useParams();
  const {error, document} = useDocument('guards', id) 

  //log document

  return (
    <div className='security-info py-4'>
      {document && <SecurityInfo info={document} key={document.id}/>}
    </div>
  )
}
