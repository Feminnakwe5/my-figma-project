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
        />
        <div>
          {/* find how to conditionally render/display button with css */}
          <button onClick={this.props.subtractCount}> Go back </button>
          <button onClick={this.props.addCount}> Next step </button>
        </div>
      </div>
    );
  }
}

export default Main;
