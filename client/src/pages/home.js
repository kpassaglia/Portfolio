import React, {Component} from 'react';
import ScrollSnapParent from '../components/ScollSnapParent';
import {Art1, Art2, Art3, Art4} from '../components/assets/images/art';
import {Outdoor1} from '../components/assets/images/outdoor';
// import {Grid} from '../components/';
// ParallaxBanner,Container, Paper, ScrollSnap

const backgroundImages = [
  {content: `${Outdoor1}`, alt: 'outdoor1', title: 'CoolerProblems'},
  {content: `${Art1}`, alt: 'art1'},
  {content: `${Art2}`, alt: 'art2'},
  {content: `${Art3}`, alt: 'art3'},
  {content: `${Art4}`, alt: 'art4'},
];

// const Wrapper = ({children}) => <Grid></Grid>;

class Home extends Component {
  render() {
    return (
      <ScrollSnapParent
        backgroundList={backgroundImages}
        child={'<Grid></Grid>'}></ScrollSnapParent>
    );
  }
}
export default Home;

//Parrallax and Cards
// const bannerStyle = {
//   position: 'fixed',
//   right: 0,
//   top: 0,
//   height: '100vh',
//   width: '25vw',
// };

// const paperContent = [
//   {content: 'about', link: '/about'},
//   {content: 'projects', link: '/projects'},
//   {content: 'contact', link: '/contact'},
//   {content: 'cool tech', link: '/tech'},
//   {content: 'resources', link: '/resources'},
//   {content: 'communitiy talk', link: '/talk'},
// ];
