import React from 'react';

class FinishUp extends React.Component {
  render() {
    const allSelected = [...this.props.planState, ...this.props.addOnState].map(
      (selected) => {
        return (
          <div key={selected.id}>
            <h1>{selected.title}</h1>
            <p>
              +$
              {this.props.isMonthly
                ? selected.monthPrice + '/mon'
                : selected.yearPrice + '/yr'}
            </p>
          </div>
        );
      }
    );
    const monthly = this.props.isMonthly;

    const total = [...this.props.planState, ...this.props.addOnState].reduce(
      (sum, obj) => (monthly ? sum + obj.monthPrice : sum + obj.yearPrice),
      0
    );

    return (
      <div>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        {allSelected}
        <div>
          total per month
          <p>{total}</p>
        </div>
      </div>
    );
  }
}

export default FinishUp;
