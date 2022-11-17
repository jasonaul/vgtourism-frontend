import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Header from './Header';
import NavLinks from './Navlinks';

const Navbar = props => {
    return <Header>
        <button className="main-navigation-menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation-title">
            <Link to ="/"> VGTourism </Link>
        </h1>
        <nav>
            <NavLinks />
        </nav>

    </Header>
};

export default Navbar