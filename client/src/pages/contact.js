import React, {Component} from 'react';
import {ParallaxBanner} from '../components/';
// Container, Paper, ScrollSnap
class Contact extends Component {
  render() {
    return (
      <>
        <ParallaxBanner class='contact' page='Contact'></ParallaxBanner>
        <h1>Contact CoolerProblems</h1>
        <div>ADD Contact Form</div>
      </>
    );
  }
}
export default Contact;
