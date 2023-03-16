import React from 'react';
import arcade from './images/icon-arcade.svg';
import advanced from './images/icon-advanced.svg';
import pro from './images/icon-pro.svg';

// SERVICE CARDSDATA
export const addCardsData = [
  {
    id: 1,
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    monthPrice: 1,
    yearPrice: 10,
    checked: false,
  },
  {
    id: 2,
    title: 'Larger Storage',
    subtitle: 'Extra 1TB of cloud save',
    monthPrice: 2,
    yearPrice: 20,
    checked: false,
  },
  {
    id: 3,
    title: 'Customizable profile',
    subtitle: 'Access to multiplayer games',
    monthPrice: 2,
    yearPrice: 20,
    checked: false,
  },
];

// PLANDATA INFO
export const plansData = [
  {
    id: 1,
    image: arcade,
    alt: 'arcade logo',
    title: 'Arcade',
    monthPrice: 9,
    yearPrice: 90,
    yearDiscount: '2 months free',
  },
  {
    id: 2,
    image: advanced,
    alt: 'advanced logo',
    title: 'Advanced',
    monthPrice: 12,
    yearPrice: 120,
    yearDiscount: '2 months free',
  },
  {
    id: 3,
    image: pro,
    alt: 'pro logo',
    title: 'Pro',
    monthPrice: 15,
    yearPrice: 150,
    yearDiscount: '2 months free',
  },
];
// INPUTFORM DATA
export const inputData = [
  {
    id: 1,
    name: 'Name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
  },
  {
    id: 2,
    name: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    id: 3,
    name: 'Phone Number',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
  },
];
