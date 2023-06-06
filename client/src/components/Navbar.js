import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="n">
      <span><img src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" height="45px" width="224px" style={{paddingLeft:46}}/></span>
      <nav ref={navRef}>
        <div className="links">
          <span>
            <Link to="/Home2" className="lnk">Home</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <select
              onChange={(e) =>
                (window.location.href = `/posts?cat=${e.target.value}`)
              }
            >
              <option value="">All Categories</option>
              <option value="art">Art</option>
              <option value="science">Science</option>
              <option value="technology">Technology</option>
              <option value="movie">Movie</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
            </select>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/write" className="lnk">Write</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/myblogs" className="lnk">My Blogs</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Menu
            </button>
            {showDropdown && (
              <ul className="dropdown-menu" style={{listStyle:"none"}}>
                <li>
                  <Link to="/profile" className="lnk">Profile</Link>
                </li>
                <li>
                  <Link to="/home" className="lnk">Logout</Link>
                </li>
              </ul>
            )}
          </span>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
