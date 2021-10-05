/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
        <div>
            <div className="col-md-3">
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
            </div>
            </div>
            </div>
    )
}

export default Noteitem
