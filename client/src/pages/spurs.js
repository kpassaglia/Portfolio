import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

class Spurs extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='spurs' page='Spurs'></ParallaxBanner>
        <h1>HotSpurs</h1>
        <div>ADD FEED CARDS</div>
      </>
    );
  }
}

export default Spurs;
