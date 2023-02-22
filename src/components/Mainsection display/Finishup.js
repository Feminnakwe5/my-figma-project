import React from 'react';

class FinishUp extends React.Component {
  render() {
    const monthly = this.props.isMonthly;

    const allSelected = [...this.props.planState, ...this.props.addOnState].map(
      (selected) => {
        return (
          <div key={selected.id} className='finish-up-options'>
            <h1>
              {selected.yearDiscount && monthly
                ? selected.title + '(Monthly)'
                : selected.yearDiscount
                ? selected.title + '(Yearly)'
                : selected.title}
            </h1>
            <p>
              +$
              {monthly
                ? selected.monthPrice + '/mon'
                : selected.yearPrice + '/yr'}
            </p>
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
          total (per {monthly ? 'month' : 'year'})
          <p>
            $ {total} {monthly ? '/mon' : '/Yr'}
          </p>
        </div>
      </div>
    );
  }
}

export default FinishUp;
