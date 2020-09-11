import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

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
      <Container className={classes.root}>
        {props.keys}
        <img src={require(`../assets/images/art/${props.name}.jpg`)} />
      </Container>
    </>
  );
}
