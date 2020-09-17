import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

class Creators extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='creators' page='creators'></ParallaxBanner>
        <h1>CoolerCreators</h1>
        <div>ADD FEED CARDS - alsoknownas.us and Mark Wilson Site </div>
      </>
    );
  }
}

export default Creators;
