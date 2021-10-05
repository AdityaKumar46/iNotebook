/* eslint-disable react/jsx-pascal-case */
import react from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const state = {
        "name": "Harry",
        "class": "5b"
    }

    return (
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )

}

export default NoteState;