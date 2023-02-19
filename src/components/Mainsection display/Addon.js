import React from 'react';
import { AddOnCards } from './AddOnCards';

class AddOn extends React.Component {
  render() {
    return (
      <div>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
        <AddOnCards isMonthly={this.props.isMonthly} />
      </div>
    );
  }
}

export default AddOn;
