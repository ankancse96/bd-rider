import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div style={{ backgroundColor:"black"}} >
            <nav className="nav">
                <ul>
                    <li className="title">
                    <Link to="/home">Riders Zone</Link>  
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    
                    <li>
                        <Link to="/login">Login {loggedInUser.email}</Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="title-container">
                
                <h6>A global icon of Bangladesh luxury</h6>
                
            </div>
        </div>
    );
};

export default Header;