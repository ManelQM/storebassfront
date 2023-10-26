import React, { useState } from "react";
import "./UpdateProfileForm.css";
import { useAsyncError } from "react-router-dom";

const UpdateProfileForm = () => {
    const [name, setName] = useState("");
    const [surname,setSurname] = useState("");
    const [address, setAddress] = useState("");
    return (
        <div className="updateAesthetics">
            <h1>Update your profile</h1>
            <form className="updateAestheticsForm">
                <label htmlFor="name">Name</label>
                <input
                value={name}
                type="name"
                placeholder="New name here"
                name="name"
                />
                <label htmlFor="surname">Surname</label>
                <input 
                value={surname}
                type="surname"
                placeholder="New surname here"
                name="surname"
                />
                <label htmlFor="address">Address</label>
                <input
                value={address}
                type="address"
                placeholder="New address"
                name="address"
                />
            </form>
        </div>
    )
};

export default UpdateProfileForm; 