import React from 'react';
import { Row } from 'react-bootstrap';
import image from '../../images/background.jpg';
import Ride from '../Ride/Ride';
import fakeData from '../../fakeData/ride'
import '../Header/Header.css'
const Home = () => {

    const rides = fakeData;
    
    return (
        <div  style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image})` }} className="header">
            
           <Row>
           {rides.map(ride=><Ride ride={ride}></Ride>)}
           </Row>
        </div>
    );
};

export default Home;