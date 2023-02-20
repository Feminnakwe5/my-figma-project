import React from 'react';
import { AddOnCards } from './AddOnCards';

class AddOn extends React.Component {
  componentDidMount() {
    this.props.clearState([]);
  }

  render() {
    return (
      <div>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
        <AddOnCards
          isMonthly={this.props.isMonthly}
          selectAddOns={this.props.selectAddOns}
        />
      </div>
    );
  }
}

export default AddOn;
