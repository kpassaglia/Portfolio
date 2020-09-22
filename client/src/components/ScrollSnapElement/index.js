import React from 'react';
import Container from '@material-ui/core/Container';
import './style.css';

export default function ScrollSnapElement(props) {
  return (
    <Container
      className='snapElement'
      style={{backgroundImage: `url(${props.name})`}}>
      <h1>{props.title}</h1>
      {props.child}
    </Container>
  );
}
