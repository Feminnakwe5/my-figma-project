import React from 'react';
import MainDisplay from './MainDisplay';
import ThankYou from './ThankYou';

class Main extends React.Component {
  render() {
    return this.props.stateCount <= 4 ? (
      <div className='content'>
        <div className='main-content'>
          <MainDisplay
            currentCount={this.props.stateCount}
            togglePlan={this.props.togglePlan}
            isMonthly={this.props.isMonthly}
            selectAddOns={this.props.selectAddOns}
            selectPlan={this.props.selectPlan}
            planState={this.props.planState}
            addOnState={this.props.addOnState}
            clearState={this.props.clearState}
            clickedPlan={this.props.clickedPlan}
            addOnSelected={this.props.addOnSelected}
            setCount={this.props.setCount}
          />
        </div>
        <div className='main-content-btn'>
          <button
            onClick={this.props.subtractCount}
            className={this.props.stateCount === 1 ? 'hidden' : 'go-back-btn'}
          >
            Go Back
          </button>

          <button
            onClick={this.props.addCount}
            className='next-step-btn'
            type='submit'
            form='form1'
            disabled={this.props.formSubmit}
          >
            {this.props.stateCount === 4 ? 'Confirm' : 'Next Step'}
          </button>
        </div>
      </div>
    ) : (
      <ThankYou />
    );
  }
}

export default Main;
