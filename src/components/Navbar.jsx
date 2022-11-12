import React from 'react'
// import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'

class Navbar extends React.Component {
    render(){
        return(
            <div id="body">
            <header class="Allhead transparent" id="Header">
            <Router>
            <div class="header-logo">
                <a class="logo" title="VGTourism">
                <Link to='/'>
                    <img id="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img></Link>
                </a>
            </div>
            </Router>
            <div class="header-nav-full">
            <div class="header-left">
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
                        <Router>
                        <li class="split">
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                       
                        <li class="split">
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                        </Router>
                    </ul>
                </nav>
            </div>
            </div>
            </header>
            </div>
        )
    }
}


export default Navbar


