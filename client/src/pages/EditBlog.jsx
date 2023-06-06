import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle]= useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch the existing blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs/${id}`);
      const { title,subtitle, body } = response.data;
      setTitle(title);
      setSubTitle(subtitle);
      setBody(body);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("body", body);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:3001/blogs/${id}`, formData);
      // Handle success or redirect to the updated blog post
    } catch (error) {
      console.error("Error editing blog post:", error);
    }
  };

  return (
    <>
      <Navbar/>
      <h1 className="wlcm">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="editform">
        <label>
          Title: <br/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br /> <br/>
        <label>
          SubTitle: <br/>
          <input type="text" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} />
        </label>
        <br /> <br/>
        <label>
          Body: <br/>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} className="body"></textarea>
        </label>
        <br /><br/>
        <label>
          Image: <br/>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="im" />
        </label>
        <br /><br/>
        <button type="submit" style={{cursor:"pointer", backgroundColor:"rgb(239, 178, 11)", border:"none", height:"3.5vh", width:"7vw", borderRadius:"8px"}}>Update</button>
      </form>
    </>
  );
}

export default EditBlog;
