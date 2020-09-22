import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import {Stock1} from '../assets/images/stock';

//Parallax Package: https://www.npmjs.com/package/react-scroll-parallax#banner-layers-prop

export default function parallaxBanner(props) {
  return (
    <ParallaxBanner
      className={props.class}
      layers={[
        {
          image: Stock1,
          amount: 1,
        },
        {
          image: Stock1,
          amount: -1,
        },
      ]}
      style={props.style}>
      <h1>{props.page}</h1>
    </ParallaxBanner>
  );
}
