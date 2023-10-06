import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";




const Body = () => {
  return (
    <div className="bodyAesthetics">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default Body;
