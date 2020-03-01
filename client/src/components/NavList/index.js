import React from 'react';
import NavLink from '../NavLink';

export default function navList() {
  return (
    <div>
      <NavLink link='/about' name='about'></NavLink>
      <NavLink link='/projects' name='projects'></NavLink>
      <NavLink link='/contact' name='contact'></NavLink>
    </div>
  );
}
