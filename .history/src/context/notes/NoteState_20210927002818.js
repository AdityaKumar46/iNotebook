/* eslint-disable react/jsx-pascal-case */
import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const notesInitial=[
        {
          "_id": "61502ecb0693289ca266b48f",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:51.951Z",
          "__v": 0
        },
        {
          "_id": "61502ecc0693289ca266b491",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:52.118Z",
          "__v": 0
        },
        {
          "_id": "61502ecc0693289ca266b493",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:52.292Z",
          "__v": 0
        },
        {
          "_id": "61502ecc0673289ca266b493",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:52.292Z",
          "__v": 0
        },
        {
          "_id": "61502ecc0693989ca266b493",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:52.292Z",
          "__v": 0
        },
        {
          "_id": "61502ecc0693279ca266b493",
          "user": "615017a7129b3f82f0a8a25a",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-09-26T08:26:52.292Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial);

      //Add a note

      const addNote = () =>{

      }

      //Delete a note

      const deleteNote = () =>{

      }

      //Edit a note

      const editNote = () =>{
        
      }

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;