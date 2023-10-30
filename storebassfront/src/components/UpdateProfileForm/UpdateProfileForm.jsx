import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {updateProfile} from "../../services/apiCalls"; 
import {userData} from "../../containers/Login/loginSlice";
import "./UpdateProfileForm.css";

const UpdateProfileForm = () => {
    const [name, setName] = useState("");
    const [surname,setSurname] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const reduxDataUser = useSelector(userData); 
    const [messageSuccess, setMessageSuccess] = useState([""]); 

    const [updateMyProfile, setUpdatemyprofile] = useState({
        name: "", 
        surname: "",
        address: "",
    }); 

    const [updateMyProfileError, setUpdatemyprofileError] = useState({
        name: "",
        surname: "",
        address: "",
    })
    
    const handleUpdate = async (e) => {
        setUpdatemyprofile((prevState) => ({
            ...prevState, 
            [e.target.name]: e.targe.value,
        }))
    };

    const errorHandler = (e) => {
        let error = "";
    }; 

    useEffect (() => {
        if (messageSuccess !== "") {
            setMessageSuccess(""); 
        }
    }, []);
    
    const letsUpdateUser = () => {
        let makeUpdate = {
            id: reduxDataUser.user.id,
            name: updateMyProfile.name,
            surname: updateMyProfile.surname,
            address: updateMyProfile.address,

        };

        updateProfile (makeUpdate, reduxDataUser.token.jwt)
        .then((result) => {

        })
        .catch((error) =>console.log(error)); 
    }
    
    return (
        <div className="profileCardAesthetics">
        <div className="updateAesthetics containerProfile">
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
                <button type="submit" onClick={letsUpdateUser}>Update Profile</button>
            </form>
        </div>
        </div>
    )
};

export default UpdateProfileForm; 