import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

function navLink(props) {
  return (
    <div>
      <Button href={props.link}>{props.name}</Button>
    </div>
  );
}

export default navLink;
