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
    return plansData.map((plan) => {
      return (
        <div
          key={plan.id}
          className='card'
          onClick={() => this.props.selectPlan(plan.id)}
        >
          <img src={plan.image} alt={plan.alt} />
          <h3>{plan.title}</h3>
          <p>
            $
            {this.props.isMonthly
              ? plan.monthPrice + '/mon'
              : plan.yearPrice + '/yr'}
          </p>
          {!this.props.isMonthly && <p>{plan.yearDiscount}</p>}
        </div>
      );
    });
  }
}

export { PlanCards, plansData };
