/* eslint-disable react/jsx-pascal-case */
import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const state = {
        "name": "Harry",
        "class": "5b"
    }

    const [state, setstate] = useState(initialState)

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;