import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const options = [
    {
      id: 1,
      text: 'YOUR INFO',
      link: '/',
    },
    {
      id: 2,
      text: 'SELECT PLAN',
      link: 'plans',
    },
    {
      id: 3,
      text: 'ADD-ONS',
      link: 'addons',
    },
    {
      id: 4,
      text: 'SUMMARY',
      link: 'finish',
    },
  ];

  const navItems = options.map((option) => {
    return (
      <div key={option.id} className='nav-item'>
        <NavLink
          to={option.link}
          className={({ isActive }) => (isActive ? 'button-change' : 'nav-btn')}
        >
          <b>{option.id}</b>
        </NavLink>
        <div className='nav-text'>
          <p className='step'> STEP {option.id}</p>
          <p className='text'>{option.text}</p>
        </div>
      </div>
    );
  });

  return <div className='Nav'>{navItems}</div>;
}

export default Nav;
