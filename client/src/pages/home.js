import React, {Component} from 'react';
import {ParallaxBanner, Container, Paper, ScrollSnap} from '../components/';
import Art1 from '../components/assets/images/art/art1.jpg';
import Art2 from '../components/assets/images/art/art2.jpg';
import Art3 from '../components/assets/images/art/art3.jpg';
import Art4 from '../components/assets/images/art/art4.jpg';

const bannerStyle = {
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  width: '25vw',
};

const paperContent = [
  {name: 'about', link: '/about'},
  {name: 'projects', link: '/projects'},
  {name: 'contact', link: '/contact'},
  {name: 'cool tech', link: '/tech'},
  {name: 'resources', link: '/resources'},
  {name: 'communitiy talk', link: '/talk'},
];

const backgroundImages = [
  {name: `${Art1}`, alt: 'art1'},
  {name: `${Art2}`, alt: 'art2'},
  {name: `${Art3}`, alt: 'art3'},
  {name: `${Art4}`, alt: 'art4'},
];

class Home extends Component {
  render() {
    return (
      <>
        {backgroundImages.map((backgrounds, index) => (
          <ScrollSnap index={index} name={backgrounds.name} />
        ))}

        {/* {paperContent.map((papers, index) => (
            <Paper key={index} name={papers.name} />
          ))} */}
        {/* <ParallaxBanner
          class='home'
          page='Home'
          style={bannerStyle}></ParallaxBanner> */}
      </>
    );
  }
}

export default Home;
