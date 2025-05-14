import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ text, variant = 'primary', onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
