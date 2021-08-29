import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
    
const Navbar = () => {
    return (
      
          <nav>
            <h3>Logo</h3>
            <ul>
            <li>About</li>
            <li>
                <NavLink className="nav-link" to="/register">New here? Register</NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/SimpleMap">View Map</NavLink>
            </li>
            {/* <li>Distributions</li> */}
            </ul>

        </nav>
        
        
    )
}

export default Navbar;