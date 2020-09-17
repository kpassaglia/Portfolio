import React, {Component} from 'react';
import {ParallaxBanner, Container, Paper, ScrollSnap} from '../components/';

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
