
import React, { useEffect, useState } from 'react'
// import notes from './dummyNotes'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";


const Notes = ({notess}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [filtered, setfiltered] = useState(notess) 
  function handleSearch(e){
    e.prventDefault()
    setKeyword(e.target.value)
    setfiltered(notess.filter(note => {
      if(note.tittle.toLowerCase().match(keyword.toLowerCase())){
        return note;
      }
    }))
  }
// useEffect(handleSearch, [keyword])
  return (
<section>
  <header className='notes_header'>
    {!showSearch && <h2>My Notes</h2> }
    <div className="search">
    {showSearch && <input type="text" value={keyword} onChange={handleSearch}  placeholder='keyword...' className='keyword' /> }
    <button className='search-btn' onClick={() => setShowSearch(prevState => !prevState)} ><IoIosSearch/> </button>
    </div>
  </header>
  <div className="notes-container">
{filtered.map(note => <NoteItem key={note.id } note={note}  />)}
</div>
<div className="add-icon-div">
<Link to="/create-note" className='add-icon'><CiSquarePlus className='plus-icon'/> </Link>
</div>
</section>
  )
}

export default Notes
