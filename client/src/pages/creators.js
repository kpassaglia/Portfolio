import React, {Component} from 'react';
import {ScrollSnapParent, Paper} from '../components';
import {
  Creator1,
  Creator2,
  Creator3,
  Creator4,
} from '../components/assets/images/creators';
import {Stock1, Stock2} from '../components/assets/images/stock';

const creatorDetails = [
  {
    name: 'Russel Beaver',
    category: 'design',
    href: 'https://alsoknownas.us/',
    title: 'Also Known As',
  },
  {
    name: 'Ryan Moore',
    category: 'photography',
    href: 'https://www.ryanmoorephotography.com/',
    title: 'Ryan Moore Photography',
  },
  {
    name: 'Ela and Jason Finch',
    category: 'photography',
    href: 'https://studiofinch.com/',
    title: 'Studio Finch',
  },
  {
    name: 'Mark Wilson',
    category: 'art',
    href: 'https://onetie-alltie.com/',
    title: 'One Tie All Tie',
  },
  {
    name: 'Simo Ahava',
    category: 'analytics',
    href: 'https://www.simoahava.com/',
    title: 'Simo Ahava Blog',
  },
  {
    name: 'Avinash Kaushik',
    category: 'analytics',
    href: 'https://www.kaushik.net/avinash/',
    title: "Occam's Razor",
  },
];
//Loop - put function in varaible
//Also Consider housing arrays in there own location

const backgroundImages = [
  {content: `${Creator1}`, alt: 'creator1', title: creatorDetails[0].title},
  {content: `${Stock1}`, alt: 'creator2', title: creatorDetails[1].title},
  {content: `${Stock2}`, alt: 'creator3', title: creatorDetails[2].title},
  {content: `${Creator2}`, alt: 'creator4', title: creatorDetails[3].title},
  {content: `${Creator3}`, alt: 'creator5', title: creatorDetails[4].title},
  {content: `${Creator4}`, alt: 'creator6', title: creatorDetails[5].title},
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
