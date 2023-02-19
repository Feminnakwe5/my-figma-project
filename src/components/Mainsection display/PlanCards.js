import React from 'react';

const plansData = [
  {
    id: 1,
    image: '',
    alt: 'arcade logo',
    title: 'Arcade',
    monthPrice: 9,
    yearPrice: 90,
    yearDiscount: '2 months free',
  },
  {
    id: 2,
    image: '../images/advanced.png',
    alt: 'advanced logo',
    title: 'Advanced',
    monthPrice: 12,
    yearPrice: 120,
    yearDiscount: '2 months free',
  },
  {
    id: 3,
    image: '../images/pro.png',
    alt: 'pro logo',
    title: 'pro',
    monthPrice: 15,
    yearPrice: 150,
    yearDiscount: '2 months free',
  },
];

class PlanCards extends React.Component {
  render() {
    return plansData.map((card) => {
      return (
        <div className='card'>
          <img src={card.image} alt={card.alt} />
          <h3>{card.title}</h3>
          <p>
            $
            {this.props.isMonthly
              ? card.monthPrice + '/mon'
              : card.yearPrice + '/yr'}
          </p>
          {!this.props.isMonthly && <p>{card.yearDiscount}</p>}
        </div>
      );
    });
  }
}

export { PlanCards, plansData };
