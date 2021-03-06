import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Nav = () => {
   const navStyle = {
      color: 'gold'
   };
   return(
      <nav>
         <h3>Welcome to Moms Who Blog</h3>
         <ul className="nav-Links">
            <Link style={navStyle} to="/">
            <li>Welcome</li>
            </Link>
            <Link style={navStyle} to="/moms">
            <li>Blogs</li>
            </Link>
            <Link style={navStyle} to="/signup">
            <li>Sign Up</li>
            </Link>
            <Link style={navStyle} to="/login">
            <li>Log In</li>
            </Link> 
         </ul>
      </nav>
   )
}
export default Nav;
