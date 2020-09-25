import React, {Component} from 'react';
import {ScrollSnapParent, Paper} from '../components';
import {
  Creator1,
  Creator2,
  Creator3,
  Creator4,
} from '../components/assets/images/creators';
const backgroundImages = [
  {name: `${Creator1}`, alt: 'creator1', title: 'CoolerCreators'},
  {name: `${Creator2}`, alt: 'creator2'},
  {name: `${Creator3}`, alt: 'creator3'},
  {name: `${Creator4}`, alt: 'creator4'},
];

const creatorDetails = [
  {
    creator: 'Russel Beaver',
    category: 'design',
    href: 'https://alsoknownas.us/',
    name: 'Also Known As',
  },
  {
    creator: 'Mark Wilson',
    category: 'art',
    href: 'https://onetie-alltie.com/',
    name: 'One Tie All Tie',
  },
  {
    creator: 'Simo Ahava',
    category: 'analytics',
    href: 'https://www.simoahava.com/',
    name: 'Simo Ahava Blog',
  },
  {
    creator: 'Avinash Kaushik',
    category: 'analytics',
    href: 'https://www.kaushik.net/avinash/',
    name: "Occam's Razor",
  },
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
