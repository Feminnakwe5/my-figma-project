import React from 'react';
import MainDisplay from './MainDisplay';

class Main extends React.Component {
  render() {
    return (
      <div>
        <MainDisplay
          currentCount={this.props.stateCount}
          togglePlan={this.props.togglePlan}
          isMonthly={this.props.isMonthly}
          selectedAddOns={this.props.selectedAddOns}
          selectedPlan={this.props.selectedPlan}
        />
        <div>
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
