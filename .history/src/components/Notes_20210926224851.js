import React from 'react'

function Notes() {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                {notes.map((note)=>{
                    return note.title;
                })}
            </div>
        </div>
    )
}

export default Notes
