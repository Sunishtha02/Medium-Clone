import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import "./Home2.css";
const Home2 = () => {
  const [blogs, setBlogs] = useState([]);
  const[username, setUsername]=useState('');
  const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const storedUsername = Cookies.get('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  useEffect(() => {
    // Fetch the blogs from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blogs', {
          params: { searchTerm },
        }); // Replace with your API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='mn'>
      <Navbar/>
      <h1 className="wlcm">Welcome {username}!!</h1>
      <div className="search">
          <input
            type="text"
            className='searchf'
            placeholder="Search by author or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
      </div>
      {blogs.map((blog) => (
        <center>
        <div key={blog.id} className='blogs'>
          <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} height="150px" width="250px"/>
          <div className='data'>
            <h2>{blog.title}</h2>
            <p><b>Author:</b> {blog.createdUser}</p>
            <p className='subtitle2'>{blog.subtitle}</p>
            <p className='time2'>{blog.timeCreated} &nbsp; <span>{blog.category}</span></p>
            <Link to={`/blogs/${blog.id}`} className="readbtnd">
              <button className='read'>Read Blog</button>
            </Link>
          </div>
        </div>
        </center>
      ))}
    </div>
  );
};

export default Home2;
