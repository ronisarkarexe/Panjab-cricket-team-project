import React from 'react';
import './Header.css';
import logo from '../../logo/punjab-logo.png'

const Header = () => {
    return (
        <div className="logo-header">
            <div className="header-img">
                <img src={logo}/>
            </div>
            <div className="header-title">
                <h1>King XI Punjab</h1>
            </div>
        </div>
    );
};

export default Header;