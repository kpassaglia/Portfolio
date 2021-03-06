import React from 'react';
import Button from '@material-ui/core/Button';

function navLink(props) {
  return (
    <div className={props.class}>
      <Button className={props.class} href={props.link}>
        {props.name}
      </Button>
    </div>
  );
}

export default navLink;
