import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundSize: 'cover',
    scrollSnapAlign: 'start',
    margin: 0,
    width: '100vw',
    maxWidth: '2000px',
    height: '100vh',
  },
});

export default function ScrollSnap(props) {
  const classes = useStyles();
  return (
    <>
      <Container
        className={classes.root}
        style={{backgroundImage: `url(${props.name})`}}></Container>
    </>
  );
}
