import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
function Notes() {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                {notes.map((note)=>{
                    return <NoteItem/ note={note}>
                })}
            </div>
        </div>
    )
}

export default Notes
