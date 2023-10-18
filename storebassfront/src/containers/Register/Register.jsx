import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/apiCalls";
import { useJwt } from "react-jwt";


const Register = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

     return (
        <>
        <div className="loginAesthetics">
        <div className="authAestheticsContainer ">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" id="password" placeholder="***********"/>
                <button type="submit">Register Now</button>
            </form>
            <button className="loginButton" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
        </div> 
        </div>
        
        </>
    )
}

export default Register;