import React from 'react';
import { PlanCards } from './PlanCards';

class SelectPlan extends React.Component {
  componentDidMount() {
    this.props.clearState('plan');
    this.props.clearState('isMonthly');
  }
  render() {
    return (
      <>
        <div className='plan-text'>
          <h1>Select your plan</h1>
          <p>you have the option of monthly or yearly</p>
        </div>
        <div className='plans'>
          <PlanCards
            isMonthly={this.props.isMonthly}
            selectPlan={this.props.selectPlan}
            clickedPlan={this.props.clickedPlan}
            clearState={this.props.clearState}
          />
        </div>
        <div className='toggle-plan'>
          <span className={this.props.isMonthly ? 'selected' : ''}>
            Monthly
          </span>
          <input
            className='toggle-switch'
            type='checkbox'
            onClick={this.props.togglePlan}
          />
          <span className={this.props.isMonthly ? '' : 'selected'}>Yearly</span>
        </div>
      </>
    );
  }
}

export default SelectPlan;
