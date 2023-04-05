import Notes from './components/Notes'
import Course from './Course'
import { useState } from 'react'



const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  console.log ("01 cnotes:", notes)

  const [newNote, setNewNote] = useState('a new note')


  const addNote = (event) =>{
    event.preventDefault()
    console.log("botton Clicked", event.target)
    const noteObject = {
      content : newNote,
      important : Math.random() < 0.5,
      id : notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    console.log("03 random", noteObject.important)
    setNewNote("")
  }

  const handleNoteChange = (event) =>{
    console.log("03",event.target.value)
    setNewNote(event.target.value)
  }
  

  console.log("01 notes:", props.notes)
  return (
    <div>
      <h1>List of Notes</h1>
      <Notes notes = {notes}/>
      <form onSubmit={addNote}>
        <input 
          value = {newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
      <Course course = {props.course}/>
    </div>
  )
}

export default App;