import React, { useState } from "react";
import "./UpdateProfileForm.css";
import { useAsyncError, useNavigate } from "react-router-dom";

const UpdateProfileForm = () => {
    const [name, setName] = useState("");
    const [surname,setSurname] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    
    const handleUpdate = async (e) => {
        e.preventDefault(); 
    }
    return (
        <div className="updateAesthetics">
            <h1>Update your profile</h1>
            <form className="updateAestheticsForm">
                <label htmlFor="name">Name</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                placeholder="New name here"
                name="name"
                />
                <label htmlFor="surname">Surname</label>
                <input 
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="surname"
                placeholder="New surname here"
                name="surname"
                />
                <label htmlFor="address">Address</label>
                <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="address"
                placeholder="New address"
                name="address"
                />
                <button type="submit" onClick={() => navigate("/userprofile")}>Update Profile</button>
            </form>
        </div>
    )
};

export default UpdateProfileForm; 