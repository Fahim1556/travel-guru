import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Row
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../FakeData/Images/Logo.png'
import './Booking.css'
const Booking = () => {
    return (
        <div>
            <div className=" backgroundImg">
                <div className="container">
                    <Navbar collapseOnSelect="collapseOnSelect" expand="lg" variant="dark">

                        <Link to="/home">
                            <Navbar.Brand href="#home"><img className="logoSize" src={logo} fluid="fluid" alt=""/></Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Form inline="inline">
                                    <FormControl
                                        type="text"
                                        placeholder={` "Search your Destination.."`}
                                        className="mr-sm-2 Search"/>
                                </Form>

                            </Nav>
                            <Nav>
                                <Nav.Link className="navAncors" href="#news">News</Nav.Link>
                                <Nav.Link className="navAncors" href="#destination">Destination</Nav.Link>
                                <Nav.Link className="navAncors" href="#blog">Blog</Nav.Link>
                                <Nav.Link className="navAncors" href="#contract">Contract</Nav.Link>
                                <Link to="/login">
                                    <Button className="logIn" variant="warning">Log In</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Container>
                        <Row>
                            <Col>
                                <div className='leftSideColor'>
                                    <h1>COX'S BAZAR</h1>
                                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headqiarters
                                        in southeastern Bangladesh. Is is famous mostly for its long natural sand~H H y
                                        beach, and it...</p>

                                </div>
                            </Col>
                            <Col>
                                <div className="bookingform">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Origin"/>

                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">

                                            <Form.Control type="text" placeholder="Destination"/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">

                                            <p>From</p>
                                            <input type="date" name="" id=""/>
                                            <br/>
                                            <br/>
                                            <p>To</p>
                                            <input type="date" name="" id=""/>
                                        </Form.Group>
                                        <Link to="/hotel">
                                            <Button variant="warning" type="submit">
                                                Start Booking
                                            </Button>
                                        </Link>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Booking;