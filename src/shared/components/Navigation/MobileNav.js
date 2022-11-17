import React from 'react';
import './MobileNav.css'
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const MobileNav = props => {
    const content= <CSSTransition 
        in={props.show} 
        timeout={200} 
        classNames="slide-in-left" 
        mountOnEnter 
        unmountOnExit
        >
    <aside className="mobile-nav" onClick={props.onClick}>
    <nav>
    <a href="/">
                    <img class="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img></a>
                <ul className='mobile-ul-nav'>
                    <li className='mobile-li-nav' >
                        <a href="/destinations">Destinations</a>
                    </li>
                </ul>
                </nav>
    </aside></CSSTransition>
    return ReactDom.createPortal(content, document.getElementById('mobile-nav-hook')) // two arguments, the first is the contentt you want (in this case....content.) and t he second is where in t he ReactDom you want said content to be rendered
};

export default MobileNav