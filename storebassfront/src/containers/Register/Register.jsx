import React, { useState } from "react";
import "./Register.css";
import { NavBar } from "../../components/NavBar/NavBar";

const Register = () => {
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
     return (
        <>
        <NavBar/>
        
        </>
    )
}

export default Register;