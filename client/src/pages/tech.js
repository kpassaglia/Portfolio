import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

class Tech extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='tech' page='Tech'></ParallaxBanner>
        <h1>CoolerTech</h1>
        <div>ADD FEED CARDS</div>
      </>
    );
  }
}

export default Tech;
