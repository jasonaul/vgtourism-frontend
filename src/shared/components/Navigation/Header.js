import React from 'react';
import './Header.css'

const Header = props => {
    return <header className="main-header">
        {props.children} {/*special props that refer to all the things you pass between your opening and closing tags of this component*/}

    </header>;
};

export default Header