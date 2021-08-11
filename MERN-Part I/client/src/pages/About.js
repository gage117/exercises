import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Me from '../components/Me';

function About() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center">About Me</h1>
                        <h2>
                            <Link to="/about/me">Find out more about me</Link>
                        </h2>
                    </Jumbotron>
                    <Route path="/about/me" component={Me} />
                </Col>
            </Row>
        </Container>
    )
}

export default About