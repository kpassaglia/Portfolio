import React, {Component} from 'react';
import {ScrollSnapParent, Paper} from '../components';
import {Art1, Art2, Art3, Art4} from '../components/assets/images/art';
import {Outdoor1} from '../components/assets/images/outdoor';
const backgroundImages = [
  {name: `${Outdoor1}`, alt: 'outdoor1', title: 'CoolerCreators'},
  {name: `${Art1}`, alt: 'art1'},
  {name: `${Art2}`, alt: 'art2'},
  {name: `${Art3}`, alt: 'art3'},
  {name: `${Art4}`, alt: 'art4'},
];

const creatorDetails = [
  {
    name: 'Simo Ahava',
    category: 'analytics',
    href: 'https://www.simoahava.com/',
  },
  {name: 'Russel Beaver', category: 'design', href: 'https://alsoknownas.us/'},
  {name: 'Mark Wilson', category: 'art', href: 'https://onetie-alltie.com/'},
];

class Creators extends Component {
  render() {
    return (
      <>
        <ScrollSnapParent
          backgroundList={backgroundImages}
          child={<Paper paperList={creatorDetails}></Paper>}></ScrollSnapParent>
      </>
    );
  }
}

export default Creators;
