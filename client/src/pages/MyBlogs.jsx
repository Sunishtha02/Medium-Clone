import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home2.css";

function MyBlogs() {
  const [username, setUsername] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserBlogs(storedUsername);
    }
  }, []);

  // Fetch blogs associated with the logged-in user
  const fetchUserBlogs = async (username) => {
    try {
      const response = await axios.get(`http://localhost:3001/myblogs?username=${username}`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    }
  };

  // Delete a blog post
  const deleteBlog = async (blogId) => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${blogId}`);
      // Refresh blogs after deletion
      fetchUserBlogs(username);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <>
    <Navbar/>
      <h1 className="wlcm">My Blogs</h1>
      {blogs.map((blog) => (
        <center>
        <div key={blog.id} className="blogs">
          <img src={blog.img ? `http://localhost:3001/uploads/${blog.img}` : null} alt="Blog Image"height="150px" width="250px" />
          <div className="data">
            <h2>{blog.title}</h2>
            <p>Author: {blog.createdUser}</p>
            <p className="subtitle2">{blog.subtitle}</p>
            <p className="time2">{blog.timeCreated} &nbsp; <span>{blog.category}</span></p>
            <span className="erd">
            <Link to={`/blogs/${blog.id}/edit`} className="editbtnd">
              <button className="editbtn">Edit</button>
            </Link>
            <button onClick={() => deleteBlog(blog.id)} className="deletebtn">Delete</button>
            {/* <span className="readbtn">
            <a href={`/blogs/${blog.id}`} >Read</a>
            </span> */}
            <Link to={`/blogs/${blog.id}`} className="readbtnd">
              <button className="readbtn">Read</button>
            </Link>
            </span>
          </div>
        </div>
        </center>
      ))}
    </>
  );
}

export default MyBlogs;