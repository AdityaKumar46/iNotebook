import React, { useContext, useEffect, useRef } from 'react'
import noteContext from "../context/notes/noteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';
function Notes() {

    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
    }, [])

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const updateNote = () => {
        ref.current.click();
    }

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const ref = useRef(null)
    return (
        <>
            <AddNote />

            <button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" ref={ref} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"
                                        onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description"
                                        onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag"
                                        onChange={onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row my-3">
                    <h2>Add a Note</h2>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
