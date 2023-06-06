import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./Home.css";
import Navbar2 from "../components/Navbar2";

function Home(){
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        // Fetch the blogs from the backend API
        const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3001/home2'); // Replace with your API endpoint
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
        };

        fetchBlogs();
    }, []);
    return(
        <>
            <Navbar2/>
            <div className="d1">
                <div>
                <p className="staycur">Stay Curious.</p>
                <p className="desc">Discover stories, thinking, and expertise <br/> from writers on any topic.</p>
                <button className="startread">Start reading</button>
                </div>
                <div>
                <img src="M.png" height="380px" width="450px" className="mimg"/>
                </div>
            </div>
            <div className="d2">
                <p><img src="https://e7.pngegg.com/pngimages/176/802/png-clipart-computer-icons-zigzag-arrow-encapsulated-postscript-zigzag-angle-logo.png" height="20px" /><span className="trend"><b><u>Trending on medium</u></b></span></p>
                <div className="row">
                    <div className="container">
                        <h1>01</h1>
                        <div className="content">
                            <span>Emily M. Bender</span>
                            <h4>Thought experiment in the National</h4><h4> Library of Thailand</h4>
                            <p> May 25 . 6 min read</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>02</h1>
                        <div className="content">
                            <span>Wei-Meng Lee</span>
                            <h4>Training Your Own LLM using </h4><h4>privateGPT</h4>
                            <p> May 19 . 18 min read</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>03</h1>
                        <div className="content">
                            <span>Christian Koch</span>
                            <h4>From Data Engineering to Prompt</h4><h4> Engineering</h4>
                            <p> May 23 . 8 min read</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <h1>04</h1>
                        <div className="content">
                            <span>Victor</span>
                            <h4>Improving Performance with HTTP</h4><h4> Streaming</h4>
                            <p> May 17 . 7 min read</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>05</h1>
                        <div className="content">
                            <span>Brad Stennerson</span>
                            <h4>Shameful Childhood Memories Can</h4><h4>Define You as an Adult</h4>
                            <p> May 18 . 6 min read</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>06</h1>
                        <div className="content">
                            <span>Matty Brownell</span>
                            <h4>How I used Midjourney to design a</h4><h4>brand identity</h4>
                            <p> May 5 . 5 min read</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d3">
                <div className="news">
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                        <div>
                            <h2>{blog.title}</h2>
                            <br/>
                            <p><b>Author:</b> {blog.createdUser}</p>
                            <p className="subtitle">{blog.subtitle}</p>
                            <p className="time">{blog.timeCreated} &nbsp; <span>{blog.category}</span></p>
                        </div>
                        <img src={`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} height="150px" width="230px" />
                        </div>
                    ))}
                </div>
                <div className="cat">
                    <h3>Discover more of what matters to you</h3> <br/>
                    <span>Art</span>
                    <span>Science</span>
                    <span>Technology</span><br/><br/> <br/>
                    <span>Movie</span>
                    <span>Fashion</span>
                    <span>Food</span>
                </div>
            </div>
        </>
    );
}

export default Home;