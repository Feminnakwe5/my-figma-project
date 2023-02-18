import React from 'react';

class AddOnCards extends React.Component {
  constructor(props) {
    super(props);
    this.addCards = [
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
  }

  render() {
    return this.addCards.map((addCard) => {
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

export default AddOnCards;
