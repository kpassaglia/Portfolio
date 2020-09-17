import React, {Component} from 'react';
import {ParallaxBanner, Container, Paper, ScrollSnap} from '../components/';

class NotFound extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='404' page='404'></ParallaxBanner>
        <h1>Not very cool server error</h1>
      </>
    );
  }
}
export default NotFound;
