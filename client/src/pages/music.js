import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

class Music extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='music' page='Music'></ParallaxBanner>
        <h1>CoolerMusic</h1>
        <div>ADD FEED CARDS</div>
      </>
    );
  }
}

export default Music;
