import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'


class Navbar extends React.Component {
    render(){
        return(
            <div id="body">
            <header class="Allhead transparent" id="Header">

            <div class="header-logo">
                <a class="logo" title="VGTourism">
                <a href="/">
                    <img id="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img></a>
                </a>
            </div>
            
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


