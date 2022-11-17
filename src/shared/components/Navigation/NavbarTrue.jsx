import React, { useState } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import './NavbarTrue.css'
import Header from './Header'
import MobileNav from './MobileNav'
import Backdrop from '../UIComponents/Backdrop'

const NavbarTrue = props => {
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

       <Header class="Allhead transparent" id="Header">
            
           
            <button className="main-navigation-menu-btn" onClick={openSideNav}>
                <span />
                <span />
                <span />
                </button>
            {/* <div class="header-logo">
                <a class="logo" title="VGTourism">
                <a href="/">
                    <img id="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img></a>
                </a>
            </div>
             */}
            <div class="header-nav-full">
            <div class="header-left main-navigation-header-nav">
                <nav class="header-main" id="main-nav">
                
                    <ul class="header-main-list">
                        <li class="li-left">
                            <a href="/destinations">Destinations</a>
                        </li>
                        <li class="li-left">
                            <a href="/games">Games</a>
                        </li>
                        <li>
                            <p>    |    </p>
                        </li>

                        <li class="li-user" >
                        <a href="/login">
                                <FaSignInAlt /> Login
                            </a>
                        </li>
                       
                        <li class="li-user">
                        <a href="/register"><FaUser /> Register</a>
                        </li>

                        <li class="li-user" >
                        <a href="/logout">
                                <FaSignOutAlt /> Logout
                            </a>
                        </li>
                        <li class="header-mobile">
                            <h1>Field</h1>
                        </li>
                        
                    </ul>
                    
                </nav>
            </div>
            </div>

            
            </Header></>
)};

export default NavbarTrue


