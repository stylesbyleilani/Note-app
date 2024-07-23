
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {v4 as uuid} from "uuid"
import useCreateDate from './useCreateDate'
import { TiHome } from "react-icons/ti";


const CreateNote = ({setNotess}) => {
  const [tittle, setTittle ] = useState("")
  const [content , setContents] = useState("")
  const date = useCreateDate();
  const navigate = useNavigate()
  function handleSubmit(e){
   e.preventDefault();
   if(tittle && content){
    const note = { id: uuid(), tittle, content, date }
    // add this the note array
    setNotess(prevNotes => [note, ...prevNotes])
    //redirect homeepage
    navigate("/notes")
   }
  }
  return (
    
      <section>
        <header className='create-note-header'>
       <Link to="/" className='btn'><TiHome/> </Link>
       <button className='btn lg primary' onClick={handleSubmit}>save</button>
        </header>
        <form action="" onSubmit={handleSubmit} className='create-note-form' >
          <input value={tittle} onChange={(e) => setTittle(e.target.value)} type="text" placeholder='Tittle' autoFocus  className='create-note-form input' />
          <textarea value={content} onChange={(e) => setContents(e.target.value)}  rows="28" name="" id="" placeholder='whats on your mind' className='create-note-form textarea'></textarea>
        </form>
      </section>
    
  )
}

export default CreateNote
