/* eslint-disable react/jsx-pascal-case */
import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async() => {
    //api
    const response = await fetch(`${host}/api/notes//fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
      }
    });
    const json = await response.json()
    console.log(json);
    setNotes(json);
  }



  //Add a note

  const addNote = async (title, description, tag) => {
    //api
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
      },
      body: JSON.stringify({ title, description, tag })
    });

    //logic
    const note = {
      "_id": "61502ecc0693279ca266b493",
      "user": "615017a7129b3f82f0a8a25a",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-26T08:26:52.292Z",
      "__v": 0
    };
    setNotes(notes.concat(note));

  }

  //Delete a note

  const deleteNote = async(id) => {
    //api

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
      }
    });

    const json = response.json();
    console.log(json);
    console.log("deleting note" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);

  }

  //Edit a note

  const editNote = async (id, title, description, tag) => {

    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    let newNodes = JSON.parse(JSON.stringify(notes));

    //logic to edit
    for (let index = 0; index < newNodes.length; index++) {
      const element = newNodes[index];
      if (element._id === id) {
        newNodes[index].title = title;
        newNodes[index].description = description;
        newNodes[index].tag = tag;
        break;
      }
      
    }
    
    setNotes(newNodes);

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;
