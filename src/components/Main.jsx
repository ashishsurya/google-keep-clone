import React from 'react'
import { useRef } from 'react'
import './Main.css'
import NoteForm from './NoteForm'
const Main = () => {

const inputNoteRef = useRef(null) 

  return (
    <div className='main'>
      <NoteForm inputNoteRef={inputNoteRef}/>
    </div>
  )
}

export default Main
