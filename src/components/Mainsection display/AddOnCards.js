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
  componentDidMount() {
    this.props.clearState('selectedAddOn');
  }
  render() {
    // const style = { ...this.props.addOnSelected.map((addon) => addon.id) };

    return addCardsData.map((addCard) => {
      return (
        <div
          className={
            this.props.addOnSelected.find((addon) => addon.id === addCard.id)
              ? 'selected-addOn'
              : 'add-Card'
          }
          key={addCard.id}
        >
          <div className='addOn-input'>
            <input
              id={addCard.title}
              type='checkbox'
              onClick={() => this.props.selectAddOns(addCard.id)}
            />
          </div>
          <div className='addOn-text'>
            <label htmlFor={addCard.title}>
              <h3> {addCard.title}</h3>
              <p> {addCard.subtitle}</p>
            </label>
          </div>
          <p className='addOn-price'>
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
