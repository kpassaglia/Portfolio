import React from 'react';
import NavLink from '../NavLink';
import Hidden from '@material-ui/core/Hidden';

const mainNavLinks = [
  {name: 'about', link: '/about', size: 'none'},
  {name: 'projects', link: '/projects', size: 'none'},
  {name: 'contact', link: '/contact', size: 'none'}
];

const secondaryNavLinks = [
  {name: 'cool site', link: '/sites'},
  {name: 'music', link: '/music'},
  {name: 'travel', link: '/travel'}
];

export default function navList(props) {
  return (
    <div>
      <Hidden only={props.mainSize}>
        {mainNavLinks.map((links, index) => (
          <NavLink key={index} name={links.name} link={links.link} />
        ))}
      </Hidden>
      <Hidden only={props.secondarySize}>
        {secondaryNavLinks.map((links, index) => (
          <NavLink key={index} name={links.name} link={links.link} />
        ))}
      </Hidden>
    </div>
  );
}
