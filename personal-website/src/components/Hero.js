import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image
              src="https://via.placeholder.com/200"
              roundedCircle
              alt="Profile Picture"
            />
          </Col>
          <Col md={8}>
            <h1>Prof. John Doe</h1>
            <p className="text-muted">
              Expert in Computer Science and Artificial Intelligence. Passionate about teaching, research, and innovation.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
