import React from 'react'
import {useContext} from "react";
import NoteContext from '../context/notes/NoteContext';

function About() {
    const a = useContext("")
    return (
        <div>
            This is About {a.name}
        </div>
    )
}

export default About
