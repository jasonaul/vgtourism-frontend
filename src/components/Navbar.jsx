import React from 'react'


class Navbar extends React.Component {
    render(){
        return(
            <header class="Allhead transparent" id="Header">
            <div class="header-nav-full">
            <div class="header-left">
                <nav class="header-main" id="main-nav">
                    <ul class="header-main-list">
                        <li>
                            <a href="/destinations">Destinations</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
            </header>
        )
    }
}


export default Navbar


{/* <div class="header-nav">
                <div className="header-logo">
                    <a class="logo-link" href='#' id="headlogo" title="VGTourism">
                        <img alt class="hidden" src='https://i.imgur.com/tuhpvhM.png'></img>
                    </a>
                </div>
            </div> */}