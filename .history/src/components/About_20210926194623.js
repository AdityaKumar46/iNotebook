import React from 'react'
import {useContext} from "react";
import noteContext from '../context/notes/noteContext';

function About() {
    const a = useContext("")
    return (
        <div>
            This is About {a.name}
        </div>
    )
}

export default About
