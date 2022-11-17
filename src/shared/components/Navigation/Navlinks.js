import React from "react";
import { NavLink } from "react-router-dom";

import './Navlinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/u1/destinations">Destinations</NavLink>
        </li>
        <li>
            <NavLink to="/games">Games</NavLink>
        </li>
        <li>
            <NavLink to="/users">Users</NavLink>
        </li>
        <li>
            <NavLink to="/destinations/new">New Destination</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
        
    </ul>
};

export default NavLinks