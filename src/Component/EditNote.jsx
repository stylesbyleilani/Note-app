import React, { useState } from 'react'
import { Link , useParams, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaLessThan } from "react-icons/fa6";
import useCreateDate from './useCreateDate';



const EditNote = ({notess, setNotess}) => {
  const {id} = useParams() 
  const note = notess.find((item) => item.id === id)
 const [tittle, setTittle] = useState(note.tittle);
  const [content , setContent] = useState(note.content);
  const date = useCreateDate()
  const navigate = useNavigate()
  function handleSave(e){
    e.preventDefault()
    if(tittle && content){
      const newNote = {...note, tittle, content,date}
      const newNotes = notess.map(item => {
        if(item.id === id) {
          item = newNote;
        }
        return item
      })
      setNotess(newNotes)
    }
    // SHOULD BE REDIRECTED TO THE NOTES PAGE
    navigate("/notes")
  }
 function handleDelete(){
  const newNotes = notess.filter(item => item.id != id);
  setNotess(newNotes)
  navigate("/notes")
 }

  return (
    
            <section>
        <header className='create-note_header'>
          <div className="edit-icon-div">
       <Link to="/notes" className='btn'><FaLessThan/> </Link>
       <button className='btn lg primary'  onClick={handleSave}>save</button>
       <button className='btn lg primary' onClick={handleDelete}><MdDelete className='delete'/> </button>
     </div>
        </header>
        <form action="" className='create' onSubmit={handleSave}>
          <input type="text" placeholder='Title' className='edit-input' value={tittle} onChange={(e) => setTittle(e.target.value)} autoFocus />
          <textarea  rows="28" name="" id="" value={content} onChange={(e) => setContent(e.target.value)}  placeholder='whats on your mind'></textarea>
        </form>
      </section>
    
  )
}

export default EditNote
