import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                Shop
            </Link>
            <Link to="/contact" className="option">
                Contact Us
            </Link>
        </div>    
    </div>
);

export default Header;