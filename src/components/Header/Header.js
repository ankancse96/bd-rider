import React, { useContext } from 'react';

import './Header.css';
import { Nav,Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(setLoggedInUser);
    return (
        <div style={{ backgroundColor:"black"}} >
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Rider Zone</Navbar.Brand>
        <Nav className="ml-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/destination">Destination</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/login">Login {loggedInUser.email}</Nav.Link>
      
    </Nav>
  </Navbar>
            <div className="title-container">
                
                <h6 style={{paddingTop:"20px"}}>A global icon of Bangladesh luxury Rider</h6>
                
            </div>
            
        </div>
    );
};

export default Header;