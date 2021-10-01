import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to ="/shop">Shop Now</Link>
                <Link to ="/orders">Order Review</Link>
                <Link to ="/inventory">Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;