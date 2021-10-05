/* eslint-disable react/jsx-pascal-case */
import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const s1 = {
        "name": "Harry",
        "class": "5b"
    }

    const [state, setstate] = useState(s1);
    update = () =>{
        setTimeout(() => {
            setstate({
                "name": "Addi",
                "class": "10c"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;