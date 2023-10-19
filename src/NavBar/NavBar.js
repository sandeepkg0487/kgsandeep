import React, { useState } from "react";
import { Link,useLocation  } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClick = () => {
    setIsOpen(!isOpen);
    
  };
 
  return (
   
    <nav className={`navbar   ${isOpen ? 'open' : ''}`}>
      <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
      <Link className={location.pathname === '/About' ? 'active' : ''} to="/About"> About</Link>
      <Link className={location.pathname === '/Projects' ? 'active' : ''} to="/Projects"> Projects</Link>
      <Link className={location.pathname === '/Skills' ? 'active' : ''} to="/Skills"> Skills</Link>
      <Link className={location.pathname === '/Education' ? 'active' : ''} to="/Education"> Education</Link>
      <Link className={location.pathname === '/Contact' ? 'active' : ''} to="/Contact"> Contact</Link>
      <div >
       <Link  className="hamburger" onClick={hamburgerClick} href="#menu">{`${isOpen ? '\u2716':'\u2630' }`}</Link>
     
       </div>
       {/* "&#9776":'&#10060;' */}
  </nav>

  );
};

export default NavBar;





