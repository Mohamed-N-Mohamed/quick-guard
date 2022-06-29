import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument';

export default function Details() {
  //states
  const {id} = useParams();
  const {error, document} = useDocument('guards', id) 

  //log document
  console.log(document)


  return (
    <div>Details</div>
  )
}
