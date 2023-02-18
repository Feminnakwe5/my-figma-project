import React from 'react';

class PlanCards extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [
      {
        image: '',
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

export default PlanCards;
