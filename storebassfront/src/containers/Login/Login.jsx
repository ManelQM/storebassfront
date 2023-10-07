import React, { useState } from "react";
import "./Login.css";
import {NavBar} from "../../components/NavBar/NavBar";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <NavBar/>
        <div className="loginAesthetics">
        <div className="authAestheticsContainer">
            <h2>Login</h2>
            <form className="loginAestheticsForm" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="registerButtonAesthetics" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here</button>
        </div>
        </div>  
        </>
    )
};

export default Login; 

