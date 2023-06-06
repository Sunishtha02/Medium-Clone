import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

function Login({ loggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const log = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await Axios.post(
        `http://localhost:3001/login`, // use the selected user type to determine the login route
        {
          Username: username,
          Password: password,
        }
      );
      setIsLoading(false);
      if (response.data.success) {
        setSuccess(true);
        localStorage.setItem("token", response.data.token);
        Cookies.set("username", username);
        Cookies.set("Id", response.data.Id);
        Cookies.set("mobNumber", response.data.MobNumber);
        navigate(`/Home2`); 
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="mn">
    <center>
      <div className="obx">
        <div>
            <h1 className="head">Login</h1>
            <input
              type="text"
              className="lginp"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />{" "}
            <br /> <br />
            <input
              type="password"
              className="lginp"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />{" "}
            <br /><br/>
            {isLoading && <p className="load">Loading...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {success && <p>Success!</p>}
            <button onClick={log} className="btn">
              Log in
            </button>
        </div>
        <div>
            {" "}
            Don't have an account?{" "}
            <NavLink className="lgnlink" exact to="/register">
              Sign up
            </NavLink>
        </div>
      </div>
      </center>
    </div>
  );
}
export default Login;
