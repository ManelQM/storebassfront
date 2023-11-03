import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import UserProfile from "../UserProfile/UserProfile";
import UserProfileUpdate from "../UserProfileUpdate/UserProfileUpdate";
import "./Body.css";




const Body = () => {
  return (
    <div className="bodyAesthetics">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/userprofileupdate" element={<UserProfileUpdate/>}/>
      </Routes>
    </div>
  );
};

export default Body;
