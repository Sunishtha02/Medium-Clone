import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home2.css";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch the blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar/>
      <h1 className="wlcm">{blog.title}</h1>
      <div className="lyt">
      <h2 className="sb">{blog.subtitle}</h2>
      <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} height="190px" width="350px"/>
      <p className="bbody">{blog.body}</p> <br/>
      <p><b>Author:</b> {blog.createdUser}</p>
      <p><b>Time Created:</b> {blog.timeCreated}</p>
      </div>
    </>
  );
}

export default BlogDetails;
