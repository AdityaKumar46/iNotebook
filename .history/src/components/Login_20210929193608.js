import React, { useState } from 'react'

const Login = () => {

    const [credential, setCredential] = useState({email: "", password: ""});

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
            },
            body: JSON.stringify({email : credential.email, password: credential.password})
        });
        const json = await response.json();
        console.log(json);
    }

    const onChange = (e) => {
        setCredential({...credential, [e.target.name]: e.target.value })
    }

    return (
        <div>
            
        </div>
    )
}

export default Login
