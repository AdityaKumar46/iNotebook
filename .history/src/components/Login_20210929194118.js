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
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
