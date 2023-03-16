import React from 'react';

function FinishUp() {
  const monthly = this.props.isMonthly;

  const allSelected = [...this.props.planState, ...this.props.addOnState].map(
    (selected) => {
      return (
        <div key={selected.id}>
          {selected.yearDiscount && monthly ? (
            <div className='finish-up-options' id='finish-up-plan'>
              <div className='finish-up-plan'>
                <p> {selected.title} (Monthly)</p>
                <span onClick={() => this.props.setCount(2)}>Change</span>
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
                <span onClick={() => this.props.setCount(2)}>Change</span>
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
    }
  );

  const total = [...this.props.planState, ...this.props.addOnState].reduce(
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
