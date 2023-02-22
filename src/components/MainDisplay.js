import React from 'react';
import Form from './MainSection display/Form';
import SelectPlan from './MainSection display/SelectPlan';
import AddOn from './MainSection display/AddOn';
import FinishUp from './MainSection display/FinishUp';

class MainDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.currentCount === 1 ? (
          <Form />
        ) : this.props.currentCount === 2 ? (
          <SelectPlan
            togglePlan={this.props.togglePlan}
            isMonthly={this.props.isMonthly}
            selectPlan={this.props.selectPlan}
            clickedPlan={this.props.clickedPlan}
            clearState={this.props.clearState}
          />
        ) : this.props.currentCount === 3 ? (
          <AddOn
            isMonthly={this.props.isMonthly}
            selectAddOns={this.props.selectAddOns}
            clearState={this.props.clearState}
            addOnSelected={this.props.addOnSelected}
          />
        ) : this.props.currentCount === 4 ? (
          <FinishUp
            planState={this.props.planState}
            addOnState={this.props.addOnState}
            isMonthly={this.props.isMonthly}
            clearState={this.props.clearState}
            setCount={this.props.setCount}
          />
        ) : (
          <Form />
        )}
      </>
    );
  }
}

export default MainDisplay;
