import React from 'react';
import headerlogo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header' >
            <img  src={headerlogo} alt="" srcset="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">review</a>
                <a href="/manage">manage inventory</a>
            </nav>
        </div>
        
    );
};

export default Header;