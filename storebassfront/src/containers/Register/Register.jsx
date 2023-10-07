import React, { useState } from "react";
import "./Register.css";


const Register = () => {
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
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="name"/>
                <label htmlFor="password"></label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" id="password" placeholder="***********"/>
                <button type="submit">Register Now</button>
            </form>
            <button className="loginButton" onClick={() => propTypes.onFormSwitch ("/login")}>Already have an account? Login here.</button>
        </div> 
        </div>
        
        </>
    )
}

export default Register;