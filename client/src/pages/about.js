import React, {Component} from 'react';
// import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap
import ScrollSnapParent from '../components/ScollSnapParent';
import {Art1, Art2, Art3, Art4} from '../components/assets/images/art';
import {Outdoor1} from '../components/assets/images/outdoor';
const backgroundImages = [
  {content: `${Outdoor1}`, alt: 'outdoor1', title: 'About CoolerProblems'},
  {content: `${Art1}`, alt: 'art1'},
  {content: `${Art2}`, alt: 'art2'},
  {content: `${Art3}`, alt: 'art3'},
  {content: `${Art4}`, alt: 'art4'},
];

class About extends Component {
  render() {
    return (
      <>
        <ScrollSnapParent
          backgroundList={backgroundImages}
          child={'<Grid></Grid>'}></ScrollSnapParent>
        {/* <ParallaxBanner class='about' page='About'></ParallaxBanner> */}

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
