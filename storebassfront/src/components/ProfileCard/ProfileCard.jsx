import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/Login/loginSlice";
import {selectUser,updateUserProfile } from "../UpdateProfileForm/updateProfileSlice";
import { getMyProfile } from "../../services/apiCalls";
import "./ProfileCard.css";

const ProfileCard = () => {
  const navigate = useNavigate();
  const userReduxCredentials = useSelector(selectUser);
  const dispatch = useDispatch();
// console.log(userReduxCredentials, )
//   dispatch(userData);

useEffect(() => {
  const fetchUserData = async () => {
    const response = await getMyProfile(userReduxCredentials.jwt);
    dispatch(updateUserProfile(response.data.user));
  };
  fetchUserData();
}, [dispatch,userReduxCredentials]);


  return (
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
              <h4>Email: </h4>
              <p>{userReduxCredentials?.user?.email}</p>

              <h4>Name:</h4>
              <p>{userReduxCredentials?.user?.name}</p>

              <h4>Surname:</h4>
              <p>{userReduxCredentials?.user?.surname}</p>

              <h4>Address</h4>
              <p>{userReduxCredentials?.user?.address}</p>

              <h4>Postal Code:</h4>
              <p>{userReduxCredentials?.user?.postalcode}</p>

              <h4>City:</h4>
              <p> {userReduxCredentials?.user?.city}</p>

              <h4>Country:</h4>
              <p> {userReduxCredentials?.user?.country}</p>

              <h4>Movile Phone:</h4>
              <p> {userReduxCredentials?.user?.movilephone}</p>

              <a href="#" className="btn btn-danger btn-block mt-5"
              onClick={() => navigate("/userprofileupdate")} >
                Edit Profile
              </a>

              <a href="#" className="btn btn-primary btn-block mt-3">
                Change Password
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>You are not logged</p>
      )}
    </div>
  );
};

export default ProfileCard;
