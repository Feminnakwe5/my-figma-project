import React from 'react';
import arcade from '../../images/icon-arcade.svg';
import advanced from '../../images/icon-advanced.svg';
import pro from '../../images/icon-pro.svg';

const plansData = [
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
          className={
            this.props.clickedPlan.id === plan.id
              ? 'selected-plan '
              : 'plan-card'
          }
          onClick={() => this.props.selectPlan(plan.id)}
        >
          <img src={plan.image} alt={plan.alt} />
          <div className='plan-card-text'>
            <h3>{plan.title}</h3>
            <p className='price'>
              $
              {this.props.isMonthly
                ? plan.monthPrice + '/mon'
                : plan.yearPrice + '/yr'}
            </p>
            {!this.props.isMonthly && (
              <p className='discount'>{plan.yearDiscount}</p>
            )}
          </div>
        </div>
      );
    });
  }
}

export { PlanCards, plansData };
