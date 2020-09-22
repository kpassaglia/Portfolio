import React, {Component} from 'react';
// import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap
import ScrollSnapParent from '../components/ScollSnapParent';
import {Art1, Art2, Art3, Art4} from '../components/assets/images/art';
import {Outdoor1} from '../components/assets/images/outdoor';
const backgroundImages = [
  {name: `${Outdoor1}`, alt: 'outdoor1'},
  {name: `${Art1}`, alt: 'art1'},
  {name: `${Art2}`, alt: 'art2'},
  {name: `${Art3}`, alt: 'art3'},
  {name: `${Art4}`, alt: 'art4'},
];

class Projects extends Component {
  render() {
    return (
      <>
        <ScrollSnapParent
          backgroundList={backgroundImages}
          child={'<Grid></Grid>'}></ScrollSnapParent>
        {/* <ParallaxBanner class='creators' page='creators'></ParallaxBanner> */}
        <h1>CoolerProjects</h1>
        <div>Add current stuff working on</div>
      </>
    );
  }
}

export default Projects;
