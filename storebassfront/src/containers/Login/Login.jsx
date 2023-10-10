import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "./loginSlice";
import { loginUser } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";
import "./Login.css";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
//   const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const res = await loginUser(email,password);
        if (res === "Invalid email or password"){
            setError(res); 
        }else {
            let decoded = decodeToken(res.jwt);
            let idrolenavigate = decoded.user.idrole; 

            let userCredentials = {
                token: res,
                user: decoded.user,
            };

            dispatch(login(userCredentials));

            if(idrolenavigate === 2) {
                navigate("../userprofile");
            }else {
                setError("Who am I?");
            }
        }
    } catch (error){
        console.error("LOGIN ERROR RESPONSE", error);
        setError("An error occurred during login")
    }

  };

  return (
    <>
      <div className="loginAesthetics">
        <div className="authAestheticsContainer">
          <h2>Login</h2>
          <form className="loginAestheticsForm" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="***********"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
          <button
            className="registerButtonAesthetics"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register here
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
