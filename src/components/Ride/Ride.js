import React from 'react';
import {  Button, Card, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Ride = (props) => {
    
    const{imgUrl,title,price,id} = props.ride;
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destinationDetails/${id}`);
    }
    
    return (
        <Col md={4} xl={3} l={3}>
   <Container>
    
    <Card style={{ width: '14rem', height: '22rem',margin:"5px",marginLeft:"10px",backgroundColor:"#42a1f5",color:"#fff",textAlign:"center",overflow:"hidden"}}>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
    <Card.Title><h6>{title}</h6></Card.Title>
    <Card.Text>  <p>Price: {price}</p></Card.Text>
    
    <Button onClick={() => handleBook(id)} style={{paddingTop:"10px"}}  variant="warning"> Select Ride  </Button>
    
  </Card.Body>

    </Card>
    </Container>
    </Col>
    );
};

export default Ride;