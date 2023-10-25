import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { userData } from "../../containers/Login/loginSlice"; 
import {getMyProfile} from "../../services/apiCalls";
import "./ProfileCard.css";


const ProfileCard = () => {
  const navigate = useNavigate();
  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch()

  
    return(
    <div className="profileCardAesthetics">
      {userReduxCredentials?.token !== "" ? (
      <div className="containerProfile container  container-fluid">
        <h2 className="mt-5 ml-5">My Profile</h2>

        <div className=" justify-content-around mt-5 user-info">
          <div className="col-12 col-md-3">
            <figure className="avatar avatar-profile">
              <img className="rounded-circle img-fluid" src="" alt="" />
            </figure>
            <a
              href="#"
              id="edit_profile"
              className="btn btn-primary btn-block my-5"
            >
              Go to my orders
            </a>
          </div>

          <div className="col-12 col-md-5">
            <h4>Name: </h4>
            <p>{userReduxCredentials?.user?.name}</p>

            <h4>Email Address</h4>
            <p>{userReduxCredentials?.user?.email}</p>

            <a href="#" className="btn btn-danger btn-block mt-5">
              Edit Profile
            </a>

            <a href="#" className="btn btn-primary btn-block mt-3">
              Change Password
            </a>
          </div>
        </div>
      </div>
      ):(
        <p>You are not logged</p>
      )}
        </div>
    );
  };


export default ProfileCard; 