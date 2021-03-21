import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import fakeData from '../../fakeData/ride'
import Map from '../Map/Map';
import './RideDetails.css'

const RideDetails = () => {
    const [show,setShow] = useState(false)
    let {title} = useParams();
    const rider = fakeData.filter(rides=>rides.title === title);
    const{capacity,price,imgUrl} = rider[0];
        console.log('this is',title,price,imgUrl);
    
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
            <Button onClick={()=>setShow(!show)}>Search</Button>
            <div className="footer">
                    {
                        
                        show?
<Card>
                        <Card.Body>
                        <div style={{display:"flex"}}>
                        <img src={imgUrl} alt=""/>
                        <div style={{padding:"15px"}}>{title}</div>
                        <div style={{padding:"15px"}}>{capacity}</div>
                        <div style={{padding:"15px"}}>{price}$</div>
                        </div>
                        </Card.Body>
                      </Card>
                        :null
                    }
                    {
                        show? 
                        <Card>
                        <Card.Body>
                        <div style={{display:"flex"}}>
                        <img src={imgUrl} alt=""/>
                        <div style={{padding:"15px"}}>{title}</div>
                        <div style={{padding:"15px"}}>{capacity}</div>
                        <div style={{padding:"15px"}}>{price}$</div>
                        </div>
                        </Card.Body>
                      </Card>
                        
                        :null
                    }
                    {
                        show?
                        <Card>
                        <Card.Body>
                        <div style={{display:"flex"}}>
                        <img src={imgUrl} alt=""/>
                        <div style={{padding:"15px"}}>{title}</div>
                        <div style={{padding:"15px"}}>{capacity}</div>
                        <div style={{padding:"15px"}}>{price}$</div>
                        </div>
                        </Card.Body>
                      </Card>
                        :null
                    }
                
                </div>
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

export default RideDetails;