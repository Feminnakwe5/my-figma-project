import React from 'react';

class FinishUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const plans = this.props.selectedPlan.map((plan) => {
      return (
        <>
          <h1> {plan.title}</h1>
          <p> {plan.monthPrice}</p>
        </>
      );
    });

    return { plans };
  }
}

export default FinishUp;
