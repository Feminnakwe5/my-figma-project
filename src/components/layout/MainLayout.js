import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function MainLayout() {
  return (
    <div className='Main'>
      <Nav />
      <Outlet />
    </div>
  );
}
