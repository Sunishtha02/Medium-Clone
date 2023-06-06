import {useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import "./Write.css";

function Profile() {
  const navigate= useNavigate();
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = Cookies.get("Id");

      try {
        const response = await Axios.get(`http://localhost:3001/profile?id=${id}`);
        setIsLoading(false);

        if (response.data.length > 0) {
          const userData = response.data[0];
          setUsername(userData.Username);
          setMobileNumber(userData.MobNumber);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const updateProfile = async () => {
    const id = Cookies.get("Id");

    try {
      const response = await Axios.put(`http://localhost:3001/profile?id=${id}`, {
        username,
        mobileNumber
      });

      console.log(response.data);
      // Handle success message or redirection if needed
    } catch (error) {
      console.error(error);
      // Handle error message if needed
    }
  };

  const deleteAccount = async () => {
    const id = Cookies.get("Id");

    try {
      const response = await Axios.delete(`http://localhost:3001/profile?id=${id}`);
      console.log(response.data);
      // Handle success message or redirection if needed
      navigate("/login");
    } catch (error) {
      console.error(error);
      // Handle error message if needed
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Navbar/>
      <h1 className="wlcm">Profile</h1>
      <center>
      <div className="profile">
      <label>Username:</label> <br/>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br/>
      <label>Mobile Number:</label><br/>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <br /><br/>
      <button onClick={updateProfile}>Update Profile</button> <br/><br/>
      <button onClick={deleteAccount}>Delete Account</button>
      </div>
      </center>
    </>
  );
}

export default Profile;
