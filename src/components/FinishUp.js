import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function FinishUp() {
  const { isMonthly, card, addOn } = useOutletContext();

  const monthly = isMonthly;

  const allSelected = [card, ...addOn].map((selected) => {
    return (
      <div key={selected.id}>
        {selected.yearDiscount && monthly ? (
          <div className='finish-up-options' id='finish-up-plan'>
            <div className='finish-up-plan'>
              <p> {selected.title} (Monthly)</p>
              <Link to='../plans'>Change</Link>
            </div>
            <p>
              +$
              {monthly
                ? selected.monthPrice + '/mo'
                : selected.yearPrice + '/yr'}
            </p>
          </div>
        ) : selected.yearDiscount ? (
          <div className='finish-up-options' id='finish-up-plan'>
            <div className='finish-up-plan'>
              <p> {selected.title} (Yearly) </p>
              <Link to='plans'>Change</Link>
            </div>
            <p>
              +$
              {monthly
                ? selected.monthPrice + '/mo'
                : selected.yearPrice + '/yr'}
            </p>
          </div>
        ) : (
          <div className='finish-up-options'>
            <h5> {selected.title} </h5>
            <p>
              +$
              {monthly
                ? selected.monthPrice + '/mo'
                : selected.yearPrice + '/yr'}
            </p>
          </div>
        )}
      </div>
    );
  });

  const total = [card, ...addOn].reduce(
    (sum, obj) => (monthly ? sum + obj.monthPrice : sum + obj.yearPrice),
    0
  );

  return (
    <div className='finish-up-form'>
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='options'>{allSelected}</div>
      <div className='total'>
        Total (per {monthly ? 'month' : 'year'})
        <p>
          ${total}
          {monthly ? '/mo' : '/Yr'}
        </p>
      </div>
    </div>
  );
}

export default FinishUp;
