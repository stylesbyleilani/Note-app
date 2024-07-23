
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./Component/Notes"
import CreateNote from "./Component/CreateNote"
import EditNote from "./Component/EditNote"
// import notes from "./Component/dummyNotes"
import WelcomePage from "./Component/WelcomePage"
import { useEffect, useState } from "react";
function App() {
const [notess, setNotess] = useState(JSON.parse(localStorage.getItem("notess")) || [] )

useEffect(() => {
  localStorage.setItem('notess', JSON.stringify(notess))
}, [notess])
  return (
  <main id="app">
  <BrowserRouter>
  <Routes>
  <Route path="/"  element={<WelcomePage />} />

    <Route path="/notes"  element={<Notes notess={notess} />} />
    <Route path="/create-note"  element={<CreateNote setNotess={setNotess} />} />
    <Route path="/edit-note/:id"  element={<EditNote notess={notess} setNotess={setNotess} />} />

</Routes>
  </BrowserRouter>
  </main>
  )
}

export default App
