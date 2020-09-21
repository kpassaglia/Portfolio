import React from 'react';
import Container from '@material-ui/core/Container';
import './style.css';

export default function ScrollSnapElement(props) {
  return (
    <Container
      className='snapElement'
      style={{backgroundImage: `url(${props.name})`}}>
      {props.child}
    </Container>
  );
}
