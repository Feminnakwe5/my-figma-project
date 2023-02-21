import React from 'react';
import MainDisplay from './MainDisplay';

class Main extends React.Component {
  render() {
    return (
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
          />
        </div>
        <div className='main-content-btn'>
          {this.props.stateCount > 1 && (
            <button onClick={this.props.subtractCount}> Go back </button>
          )}
          <button onClick={this.props.addCount}> Next step </button>
        </div>
      </div>
    );
  }
}

export default Main;
