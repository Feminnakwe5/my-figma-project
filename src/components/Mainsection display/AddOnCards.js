import React from 'react';

const addCardsData = [
  {
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    monthPrice: 1,
    yearPrice: 10,
  },
  {
    title: 'Larger Storage',
    subtitle: 'Extra 1TB of cloud save',
    monthPrice: 2,
    yearPrice: 20,
  },
  {
    title: 'Customizable profile',
    subtitle: 'Access to multiplayer games',
    monthPrice: 2,
    yearPrice: 20,
  },
];

class AddOnCards extends React.Component {
  render() {
    return addCardsData.map((addCard) => {
      return (
        <label for={addCard.title}>
          <input id={addCard.title} type='checkbox' />
          <div id='addCard'>
            <h3> {addCard.title}</h3>
            <h4> {addCard.subtitle}</h4>
            <p>
              {this.props.isMonthly
                ? '+$' + addCard.monthPrice + '/mo'
                : '+$' + addCard.yearPrice + '/yr'}
            </p>
          </div>
        </label>
      );
    });
  }
}

export { AddOnCards, addCardsData };
