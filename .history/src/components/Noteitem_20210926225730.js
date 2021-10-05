import React from 'react'

function Noteitem() {
    const {note} = props;
    return (
        <div>
            {note.title}
            {note.description}
        </div>
    )
}

export default Noteitem
