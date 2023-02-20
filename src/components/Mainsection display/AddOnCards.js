import React from 'react';

const addCardsData = [
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
// this.props.selectAddOns(addCard.id);
class AddOnCards extends React.Component {
  render() {
    return addCardsData.map((addCard) => {
      return (
        <div id='addCard' key={addCard.id}>
          <label htmlFor={addCard.title}></label>
          <input
            id={addCard.title}
            type='checkbox'
            onClick={() => this.props.selectAddOns(addCard.id)}
          />
          <h3> {addCard.title}</h3>
          <h4> {addCard.subtitle}</h4>
          <p>
            {this.props.isMonthly
              ? '+$' + addCard.monthPrice + '/mo'
              : '+$' + addCard.yearPrice + '/yr'}
          </p>
        </div>
      );
    });
  }
}

export { AddOnCards, addCardsData };
