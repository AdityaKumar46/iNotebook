import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const Login = () => {

    const [credential, setCredential] = useState({name: "", email: "", password: "", cpassword: ""});
    let history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, password} = credential;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(json.success)
        {
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        }
        else{
            alert("Invalid credential");
        }

    }

    const onChange = (e) => {
        setCredential({...credential, [e.target.name]: e.target.value })
    }

const Signup = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
