import React from 'react';
import Form from './MainSection display/Form';
import SelectPlan from './MainSection display/SelectPlan';
import AddOn from './MainSection display/AddOn';
import FinishUp from './MainSection display/FinishUp';

class MainDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentCount === 1 ? (
          <Form />
        ) : this.props.currentCount === 2 ? (
          <SelectPlan
            togglePlan={this.props.togglePlan}
            isMonthly={this.props.isMonthly}
            selectedPlan={this.props.selectedPlan}
          />
        ) : this.props.currentCount === 3 ? (
          <AddOn
            isMonthly={this.props.isMonthly}
            selectedAddOns={this.props.selectedAddOns}
          />
        ) : this.props.currentCount === 4 ? (
          <FinishUp
            selectedAddOns={this.props.selectedAddOns}
            selectedPlan={this.props.selectedPlan}
          />
        ) : (
          <Form />
        )}
      </div>
    );
  }
}

export default MainDisplay;
