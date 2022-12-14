import React, { useState, useContext } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import './NavbarTrue.css'
import Header from './Header'
import MobileNav from './MobileNav'
import Backdrop from '../UIComponents/Backdrop'
import { LoggedIn } from '../../context/loggedIn'
import Button from '../FormElements/Button'
// import { loggedIn } from '../../context.js/loggedIn'

const NavbarTrue = props => {
    // const authentication = useContext(loggedIn)
    const auth = useContext(LoggedIn)
    const [sideNavIsOpen, setSideOpen] = useState(false);

    const openSideNav = () => {
        setSideOpen(true)
    }

    const closeSideNav = () => {
        setSideOpen(false)
    }

       return (
        <>
        {sideNavIsOpen && <Backdrop onClick={closeSideNav}/>}
    <MobileNav show={sideNavIsOpen} onClick={closeSideNav}>
        <nav className="main-navigation-mobile-nav"></nav>
    </MobileNav> 

       <Header className="Allhead transparent" id="Header">
            
           
            <button className="main-navigation-menu-btn" onClick={openSideNav}>
                <span />
                <span />
                <span />
                </button>
            {/* <div className="header-logo">
                <a className="logo" title="VGTourism">
                <a href="/">
                    <img id="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img></a>
                </a>
            </div>
             */}
            <div className="header-nav-full">
            <img src="https://imgur.com/tN508po.jpg" alt="VGTourism"></img>
            <div className="header-left main-navigation-header-nav">
                <nav className="header-main" id="main-nav">
                
                    <ul className="header-main-list">
                        <li className="li-left">
                            <a href="/users">User Destinations</a>
                        </li>
                        <li className="li-left">
                            <a href="/new">Add Destination</a>
                        </li>
                        <li>
                            <p>    |    </p>
                        </li>

                        <li className="li-user" >
                        <a href="/login">
                                <FaSignInAlt /> Login
                            </a>
                        </li>
                       
                       {/* {!authentication.isLoggedIn && ( */}
                        <li className="li-user">
                        <a href="/register"><FaUser /> Register</a>
                        </li>
                        {/* )} */}

                       {/* {authentication.isLoggedIn && (  */}
                        <li className="li-user" >
                        {/* <a href="/logout">
                                <FaSignOutAlt /> Logout
                            </a> */}
                            <Button onClick={auth.logout}>Logout</Button>
                        </li> 
                        {/* )} */}

                        <li className="header-mobile">
                            <h1>Field</h1>
                        </li>
                        
                    </ul>
                    
                </nav>
            </div>
            </div>

            
            </Header></>
)};

export default NavbarTrue


