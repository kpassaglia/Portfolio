import React, {Component} from 'react';
import ScrollSnapParent from '../components/ScollSnapParent';
import {Art1, Art2, Art3, Art4} from '../components/assets/images/art';
import {ParallaxBanner, Grid, Container, Paper} from '../components';

const backgroundImages = [
  {name: `${Art1}`, alt: 'art1'},
  {name: `${Art2}`, alt: 'art2'},
  {name: `${Art3}`, alt: 'art3'},
  {name: `${Art4}`, alt: 'art4'},
];

const Wrapper = ({children}) => <Grid></Grid>;

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
//   {name: 'about', link: '/about'},
//   {name: 'projects', link: '/projects'},
//   {name: 'contact', link: '/contact'},
//   {name: 'cool tech', link: '/tech'},
//   {name: 'resources', link: '/resources'},
//   {name: 'communitiy talk', link: '/talk'},
// ];
