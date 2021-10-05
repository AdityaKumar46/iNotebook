/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
        <div>
            {note.title}
            {note.description}
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                    </div>
            </div>
            </div>
    )
}

export default Noteitem
