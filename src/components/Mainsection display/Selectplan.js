import React from 'react';
import { PlanCards } from './PlanCards';

class SelectPlan extends React.Component {
  render() {
    return (
      <div>
        <h1>Select your plan</h1>
        <h2>you have the option of monthly or yearly</h2>
        <PlanCards
          isMonthly={this.props.isMonthly}
          selectPlan={this.props.selectPlan}
        />
        <div>
          monthly <button onClick={this.props.togglePlan}> toggle </button>
          yearly
        </div>
      </div>
    );
  }
}

export default SelectPlan;
