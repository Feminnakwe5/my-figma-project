import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { addCardsData } from '../data';

export default function AddOns() {
  const { addOn, addOnSelect, isMonthly } = useOutletContext();

  const AddOnCards = addCardsData.map((addCard) => {
    return (
      <div
        className={
          addOn.find((card) => card.id === addCard.id)
            ? 'selected-addOn'
            : 'add-Card'
        }
        key={addCard.id}
      >
        <div className='addOn-input'>
          <input
            id={addCard.title}
            type='checkbox'
            onClick={() => addOnSelect(addCard.id)}
          />
        </div>
        <div className='addOn-text'>
          <label htmlFor={addCard.title}>
            <h3> {addCard.title}</h3>
            <p> {addCard.subtitle}</p>
          </label>
        </div>
        <p className='addOn-price'>
          {isMonthly
            ? '+$' + addCard.monthPrice + '/mo'
            : '+$' + addCard.yearPrice + '/yr'}
        </p>
      </div>
    );
  });

  return (
    <div className='addOn-display'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      {AddOnCards}
    </div>
  );
}
