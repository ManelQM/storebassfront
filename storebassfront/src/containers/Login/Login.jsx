import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "./loginSlice";
import { decodeToken } from "react-jwt";
import { loginUser } from "../../services/apiCalls";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      let decoded = decodeToken(response.jwt);
      if (response.jwt) {
        let userCredentials = {
          token: response,
          user: decoded.user,
        };
        dispatch(login(userCredentials));
        navigate("/userprofile");
      } else {
        setError("Invalid credentials. Try Again");
      }
    } catch (error) {
      console.error("Auth error", error);
      setError("ERROR");
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
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
          {error && <p className="error-message">{error}</p>}
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
