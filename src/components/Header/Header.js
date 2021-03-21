import React, { useContext } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import './Header.css';
import { Nav,Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(setLoggedInUser);
    return (
        <div style={{ backgroundColor:"black"}} >
            <Navbar expand='lg' bg="dark" variant="dark">
        
        <Navbar.Brand href="/home">Rider Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/home">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/destination">
      <Nav.Link>Destination</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/Blog">
      <Nav.Link>Blog</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link>Login {loggedInUser.email}</Nav.Link>
      </LinkContainer>
      
      
    </Nav>
    </Navbar.Collapse>
  </Navbar>
            <div className="title-container">
                
                <h6 style={{paddingTop:"20px"}}>A global icon of Bangladesh luxury Rider</h6>
                
            </div>
            
        </div>
    );
};

export default Header;