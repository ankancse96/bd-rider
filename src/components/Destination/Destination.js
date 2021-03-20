import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import fakeData from '../../fakeData/ride'
import Map from './../Map/Map';

const Destination = () => {
    let {id} = useParams();
    const rider = fakeData.filter(rides=>rides.id === id);
    
        console.log('this is',rider);
    const handaleSearch = () => {
        console.log("add search");
        
        
    }
    return (
        <div>
            this is {id}
            <Container>
                <Row>
                <Col md={4} sm={12}>
                <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Pick Form:</Form.Label>
            <Form.Control as="select">
                <option>Dhanmondi</option>
                <option>Mirpur</option>
                <option>Mohakhali</option>
                <option>KallanPur</option>
                <option>Banani</option>
            </Form.Control>
            <Form.Label>Pick To:</Form.Label>
            <Form.Control as="select">
                 <option>Dhanmondi</option>
                <option>Mirpur</option>
                <option>Mohakhali</option>
                <option>KallanPur</option>
                <option>Banani</option>
            </Form.Control>
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" placeholder="Set Date"></Form.Control>
            </Form.Group>
            <Button onClick={handaleSearch}>Search</Button>
            </Form>
                </Col>
                <Col md={8} sm={12}>
                <Map />
                </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Destination;