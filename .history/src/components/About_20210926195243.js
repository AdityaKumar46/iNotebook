import React, { useEffect } from 'react'
import {useContext} from "react";
import noteContext from '../context/notes/noteContext';

function About() {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update
    }, [])
    return (
        <div>
            This is About {a.name} and he is in class {a.class}
        </div>
    )
}

export default About
