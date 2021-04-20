import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import './Signup.css';

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/signup", {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res.data);
                props.setUser(res.data);
                if(res.data.errors){
                    alert(res.data.message.replaceAll(',','\n'))
                }else {
                    console.log("Received");
                    alert("Thank you. Your account has been created.")
                    navigate("/Home");
                }

            })
            .catch((err) => alert(err))}


    return (
        <div>
            <h1 style={{textAlign:'center'}}>SIGN UP</h1>
            <div />
            <form onSubmit={submitForm}>

               <div className="form-item">
                    <label>Username: </label>
                    <input type="text"
                           name="username"
                           value={ userName }
                           onChange={ (e) => setUserName(e.target.value)}/>
                           { errors.userName ? <p className="text-danger">{errors.userName.properties.message} </p>: "" }
               </div>

                <div className="form-item">
                    <label>First Name: </label>
                    <input type="text"
                           name="name"
                           value={ firstName }
                           onChange={ (e) => setFirstName(e.target.value)}/>
                           { errors.firstName ? <p className="text-danger">{errors.firstName.properties.message} </p>: "" }
                </div>

                <div className="form-item">
                    <label>Last Name: </label>
                    <input type="text"
                           name="name"
                           value={ lastName }
                           onChange={ (e) => setLastName(e.target.value)}/>
                           { errors.lastName ? <p className="text-danger">{errors.lastName.properties.message} </p>: "" }
                </div>

                <div className="form-item">
                    <label>Email: </label>
                    <input type="text"
                           name="email"
                           value={ email }
                           onChange={ (e) => setEmail(e.target.value)}/>
                           { errors.email ? <p className="text-danger">{errors.email.properties.message} </p>: "" }
                </div>

                <div className="form-item">
                    <label>Password: </label>
                    <input type="text"
                           name="password"
                           value={ password }
                           onChange={ (e) => setPassword(e.target.value)}/>
                           { errors.password ? <p className="text-danger">{errors.password.properties.message} </p>: "" }
                </div>

                <button type="submit" className="btn-lg btn-warning"><b>Create Account!</b></button>
            </form>
        </div>)
}

export default Signup;

