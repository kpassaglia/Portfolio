import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap

class Projects extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='projects' page='Projects'></ParallaxBanner>
        <h1>CoolerProjects</h1>
        <div>Add current stuff working on</div>
      </>
    );
  }
}

export default Projects;
