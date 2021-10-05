/* eslint-disable react/jsx-pascal-case */
import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const s1 = {
        "name": "Harry",
        "class": "5b"
    }

    const [state, setstate] = useState(s1);
   

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;