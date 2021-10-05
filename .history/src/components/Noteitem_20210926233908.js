/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
     
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i class="fas fa-trash-alt mx-2 text-danger fa-3x"></i>
                        <i class="fas fa-edit mx-2 text-primary fa-3x"></i>
                    </div>
                </div>
            </div>
       
    )
}

export default Noteitem
