import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Map from '../Map/Map';

const Desti = () => {
    return (
        <div>
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
            <h4>Please Go To Home & Select Your Ride</h4>
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

export default Desti;