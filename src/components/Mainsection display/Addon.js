import React from 'react';
import { AddOnCards } from './AddOnCards';

class AddOn extends React.Component {
  componentDidMount() {
    this.props.clearState('addOn');
  }

  render() {
    return (
      <div className='addOn-display'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <AddOnCards
          isMonthly={this.props.isMonthly}
          selectAddOns={this.props.selectAddOns}
          addOnSelected={this.props.addOnSelected}
          clearState={this.props.clearState}
        />
      </div>
    );
  }
}

export default AddOn;
