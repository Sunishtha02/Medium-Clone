import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cat");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts?cat=${category}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <>
      <Navbar/>
      <h2 className="wlcm">{category.toUpperCase()} Posts</h2>
      {posts.map((post) => (
        <center>
        <div key={post.id} className="blogs">
          <img src= {`http://localhost:3001/uploads/${post.img}`} alt={post.title} height="150px" width="250px" />
          <div className="data">
            <h2>{post.title}</h2>
            <p><b>Author:</b> {post.createdUser}</p>
            <p className='subtitle2'>{post.subtitle}</p>
            <p className='time2'>{post.timeCreated} &nbsp; <span>{post.category}</span></p>
            <Link to={`/blogs/${post.id}`} className="readbtnd">
              <button className='read'>Read Blog</button>
            </Link>
          </div>
        </div>
        </center>
      ))}
    </>
  );
};

export default CategoryPosts;
