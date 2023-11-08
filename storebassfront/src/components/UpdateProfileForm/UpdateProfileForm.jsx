import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../services/apiCalls";
import { updateUserProfile, selectUser } from "./updateProfileSlice";
import "./UpdateProfileForm.css";
import { userData } from "../../containers/Login/loginSlice";

const UpdateProfileForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const userReduxCredentials = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const makeUpdate = {
      name,
      surname,
      address,
    };

    try {
      const response = await updateProfile(makeUpdate, userReduxCredentials.jwt);
      const dataUser = response.data.user
      // console.log(userReduxCredentials.jwt,"los credentials")
      if (response) {
        console.log(response, "mecago en mi vida la response")
        dispatch(updateUserProfile (dataUser));
        setUpdateMessage("Usuario actualizado correctamente");
        console.log("se ha actualizado el usuario")
        setTimeout(() => {
          navigate("/userprofile");
        }, 2000);
      } else {
        console.log("Error trying to update user profile");
      }
    } catch (error) {
      console.error("Error trying to update user profile2", error);
    }
  };

  return (
    <div className="profileCardAesthetics">
      <div className="updateAesthetics containerProfile">
        <h1>Update your profile</h1>
        {userReduxCredentials ? (
          <form className="updateAestheticsForm" onSubmit={handleUpdate}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="New name here"
              name="name"
            />
            <label htmlFor="surname">Surname</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              placeholder="New surname here"
              name="surname"
            />
            <label htmlFor="address">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="New address"
              name="address"
            />
            <button type="submit" onClick={handleUpdate}>
              Update Profile
            </button>
          </form>
        ) : (
          <p>You must be logged in to update your profile</p>
        )}
      </div>
    </div>
  );
};

export default UpdateProfileForm;
