import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap
class About extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='about' page='About'></ParallaxBanner>
        <h1>About CoolerProblems</h1>
        <div>Mantra - "Live in the Future and Build whats missing" </div>
        <div>
          Description here about thinking differntly, finding the things that
          are actually work doing, working on thing that are "interesting"
        </div>
      </>
    );
  }
}

export default About;
