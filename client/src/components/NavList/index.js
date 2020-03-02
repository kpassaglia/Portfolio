import React from 'react';
import NavLink from '../NavLink';
import Hidden from '@material-ui/core/Hidden';

const mainNavLinks = [
  {name: 'about', link: '/about'},
  {name: 'projects', link: '/projects'},
  {name: 'contact', link: '/contact'}
];

const secondaryNavLinks = [
  {name: 'cool tech', link: '/tech'},
  {name: 'resources', link: '/resources'},
  {name: 'communitiy talk', link: '/talk'}
];

export default function navList(props) {
  return (
    <div className={props.parentClass}>
      <Hidden only={props.mainSize}>
        {mainNavLinks.map((links, index) => (
          <NavLink
            class={props.class}
            key={index}
            name={links.name}
            link={links.link}
          />
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
