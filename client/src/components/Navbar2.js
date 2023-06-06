import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = () => {
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
            <Link to="/home" className="lnk">Our Story</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/home" className="lnk">Membership</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/register" className="lnk">Write</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/login" className="lnk">Sign In</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <Link to="/register">
          <button className="gs">
            Get Started
          </button>
          </Link>
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

export default Navbar2;
