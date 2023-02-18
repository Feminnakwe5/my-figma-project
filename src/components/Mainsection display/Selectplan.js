import React from 'react';
import arcade from '../images/arcade.png';

class SelectPlan extends React.Component {
  constructor() {
    super();
    this.cards = [
      {
        image: { arcade },
        alt: 'arcade logo',
        title: 'Arcade',
        monthPrice: 9,
        yearPrice: 90,
        yearDiscount: '2 months free',
      },
      {
        image: '../images/advanced.png',
        alt: 'advanced logo',
        title: 'Advanced',
        monthPrice: 12,
        yearPrice: 120,
        yearDiscount: '2 months free',
      },
      {
        image: '../images/pro.png',
        alt: 'pro logo',
        title: 'pro',
        monthPrice: 15,
        yearPrice: 150,
        yearDiscount: '2 months free',
      },
    ];
  }

  render() {
    return this.cards.map((card) => {
      return (
        <div className='card-container'>
          <div className='card'>
            <img src={card.image} alt={card.alt} />
            <h3>{card.title}</h3>
            <p>${card.monthPrice}/mo</p>
            <p>{card.yearDiscount}</p>
          </div>
        </div>
      );
    });
  }
}

export default SelectPlan;
