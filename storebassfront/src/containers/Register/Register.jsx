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
    // const {setJwt} = useJwt();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await registerUser( {name, email ,password});

            if (response && response.status === "success") {
             
                setSuccessMessage("User registered!", response);
                

                // setJwt(response.jwt);

                setTimeout(() => {
                    navigate("/login");
                }, 3000);

            } else {
                setSuccessMessage("");
                setErrorMessage("Error. Please try again");
            }
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Conection error"); 
        }
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
            {successMessage && <p className="succesMessage">{successMessage}</p>}
            {errorMessage && <p className="errrorMessage">{errorMessage}</p>}
            <button className="loginButton" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
        </div> 
        </div>
        
        </>
    )
}

export default Register;