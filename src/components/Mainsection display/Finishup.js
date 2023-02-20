import React from 'react';

class FinishUp extends React.Component {
  constructor(props) {
    super(props);
  }
  // planState={this.props.planState}
  //           addOnState={this.props.addOnState}

  render() {
    const selectedPlan = this.props.planState.map((plan) => {
      return (
        <div key={plan.id}>
          <h1>{plan.title}</h1>
          <h2>{plan.monthPrice}</h2>
        </div>
      );
    });
    const selectedAddOns = this.props.addOnState.map((addOn) => {
      return (
        <div key={addOn.id}>
          <h1>{addOn.title}</h1>
          <h2>{addOn.monthPrice}</h2>
        </div>
      );
    });
    return (
      <div>
        {selectedPlan}
        {selectedAddOns}
      </div>
    );
  }
}

export default FinishUp;
