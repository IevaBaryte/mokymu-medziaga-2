import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderList = (items) =>
    items.map((text, idx) => (
      <div key={idx} className="mb-2 text-secondary">
        <a href="#" className="text-secondary text-decoration-none">
          {text}
        </a>
      </div>
    ));

  const formattedTime = currentTime.toLocaleTimeString(); 

  const formattedDate = new Intl.DateTimeFormat('lt-LT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  return (
    <footer className="bg-light mt-5 py-5">
      <Container>
        <Row>
          <Col md={3} className="d-flex flex-column align-items-start">
            <div className="fw-bold fs-4 text-primary">{formattedTime}</div>
            <div className="fw-medium fs-6 text-muted">{formattedDate}</div>
          </Col>

          <Col md={3}>
            <h5>Features</h5>
            {renderList([
              'Cool stuff',
              'Random feature',
              'Team feature',
              'Stuff for developers',
              'Another one',
              'Last time',
            ])}
          </Col>

          <Col md={3}>
            <h5>Resources</h5>
            {renderList([
              'Resource',
              'Resource name',
              'Another resource',
              'Final resource',
            ])}
          </Col>

          <Col md={3}>
            <h5>About</h5>
            {renderList(['Team', 'Locations', 'Privacy', 'Terms'])}
          </Col>
        </Row>
        <div className="text-center mt-4 text-muted">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
