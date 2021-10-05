import React from 'react'

const Login = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/login");
        const response = await fetch(`${host}/api/notes//fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MDE3YTcxMjliM2Y4MmYwYThhMjVhIn0sImlhdCI6MTYzMjYzODg4N30.HAXfsOwkHkBDZE2_kvHDDm2ojfh0-nGyJtqp7Gen69c"
            }
        });
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
