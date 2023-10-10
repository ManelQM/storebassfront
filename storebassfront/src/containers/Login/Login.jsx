import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "./loginSlice";
import { loginUser } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";
import "./Login.css";

const Login = (props) => {
    const navigate  = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        
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
            <button className="registerButtonAesthetics" onClick={() => navigate("/register")}>Don't have an account? Register here</button>
        </div>
        </div>  
        </>
    )
};

export default Login; 

