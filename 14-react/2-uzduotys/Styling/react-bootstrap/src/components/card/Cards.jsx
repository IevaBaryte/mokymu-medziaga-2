import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CustomButton from '../button/CustomButton';
import CardPrice from './CardPrice';

const Cards = () => {
  return (
    <Row className="mt-5">
      {CardPrice.map((group, groupIdx) =>
        group.map((plan, idx) => (
          <Col md={4} key={`${groupIdx}-${idx}`} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Header>
                <h4>{plan.title}</h4>
              </Card.Header>
              <Card.Body>
                <h1 className="card-title pricing-card-title">
                  {plan.price}
                  <small className="text-muted">{plan.period}</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <CustomButton text={plan.buttonText} variant={plan.variant} />
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default Cards;
