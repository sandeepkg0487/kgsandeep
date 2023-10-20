import React, { useState,useRef,useEffect } from "react";
import { Link,useLocation  } from "react-router-dom";
import "./navbar.scss";


const NavBar = () => {
  const location = useLocation();
  const navbarRef=useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClick = () => {
    setIsOpen(!isOpen);
    console.log("hamburger" ,isOpen)
    
  };
  useEffect(() => {
    function handleClickOutside(event) {
     
        if (navbarRef.current && !navbarRef.current.contains(event.target)){
        // && !navbarRef.current.contains(event.target)
        // Click occurred outside of the Navbar; close it.
      setIsOpen(false);
        console.log("click outside" ,isOpen)
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
 
  return (
   <div  ref={navbarRef} >
    <nav  onClick={hamburgerClick} className={`navbar ${isOpen ? 'open' : ''}`} >
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={location.pathname === '/About' ? 'active' : ''} to="/About"> About</Link>
          <Link className={location.pathname === '/Projects' ? 'active' : ''} to="/Projects"> Projects</Link>
          <Link className={location.pathname === '/Skills' ? 'active' : ''} to="/Skills"> Skills</Link>
          <Link className={location.pathname === '/Education' ? 'active' : ''} to="/Education"> Education</Link>
          <Link className={location.pathname === '/Contact' ? 'active' : ''} to="/Contact"> Contact</Link>
       
     </nav>
     <div  className="hamburger" >
            <h2 onClick={hamburgerClick}>{`${isOpen ? '\u2716':'\u2630' }`}</h2>
          </div>
     
   </div>
       

  );
};

export default NavBar;





