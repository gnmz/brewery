import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className='header'>
                <Link to='/' className='header-link'>
                    <h1 className='header-title'>Brewery's</h1>
                </Link>
            </div>
        );
    }
}

export default Header;