import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

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
