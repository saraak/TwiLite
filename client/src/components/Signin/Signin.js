import React, { useState } from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/login", {
                email: email,
                password: password
            })
            .then((res) => {
                if(res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    console.log(res.data);
                    props.setUser(res.data)
                    alert("Welcome back!")
                    navigate("/Home")
                }})
            .catch((err) => alert("User does not exist"))}


    return (
        <div>
            <h2>Please login below:</h2>
            <form onSubmit={submitForm}>
                <div className="form-item">
                <label>EMAIL</label>
                <input type="text"
                       name="email"
                       value={ email }
                       onChange={ (e) => setEmail(e.target.value)}/>
                { errors.email ?
                    <p className="text-danger">
                        {errors.email.message} </p> : "" }
                </div>

                <div className="form-item">
                <label>PASSWORD</label>
                <input type="text"
                       name="password"
                       value={ password }
                       onChange={ (e) => setPassword(e.target.value)}/>
                { errors.password ?
                    <p className="text-danger">{errors.password.message} </p> : "" }

                </div>

                <button type="submit"><b>Login</b></button>
            </form>
        </div>)
}

export default Login;

