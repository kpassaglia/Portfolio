import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Art1 from '../assets/images/art/art1.jpg';
import Art2 from '../assets/images/art/art2.jpg';
import Art3 from '../assets/images/art/art3.jpg';
import Art4 from '../assets/images/art/art4.jpg';

export default function ScrollSnap(props) {
  const useStyles = makeStyles({
    root: {
      backgrondImage: `Art${props.keys}`,
      height: '100vh',
      width: '100vw',
      scrollSnapAlign: 'start',
    },
  });

  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>{props.keys}</Container>
    </>
  );
}
