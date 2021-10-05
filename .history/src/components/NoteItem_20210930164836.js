/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {

    const context = useContext(noteContext);
    const {deleteNote} = context;
    

    const { note, updateNote } = props;
    return (
     
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fas fa-trash-alt mx-2 text-danger fa-lg" onClick={()=>{deleteNote(note._id);
                            props.showAlert("Deleted Successfully")
                        }}></i>
                        <i className="fas fa-edit mx-2 text-primary fa-lg" onClick={()=>{updateNote(note)}}></i>
                    </div>
                </div>
            </div>
       
    )
}

export default Noteitem