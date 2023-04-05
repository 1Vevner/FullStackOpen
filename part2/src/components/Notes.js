import { useState } from "react"

const NoteMapping = ({content}) =>{
    return(
        <li>{content}</li>
    )
}

const NotesRender =({notes}) =>{

    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    return(
        <>
            <div>
                <button onClick={()=> setShowAll(!showAll)}>
                    showing {showAll? "All" : "Important"}
                </button>
            </div>

            <ul>
                {notesToShow.map(
                    note => 
                        <NoteMapping key={note.id} content={note.content} />
                )}
            </ul> 
        </>
    )
}

const Notes = ({notes}) => {


    console.log("0101 notes ini:", notes)
    return (
        <div>
            <NotesRender notes = {notes} />
        </div>
    )
}

export default Notes