import React from 'react'

function Notes() {
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
