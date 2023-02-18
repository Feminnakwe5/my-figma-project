import React from 'react';
import Form from './MainSection display/Form';
import SelectPlan from './MainSection display/SelectPlan';
import AddOn from './MainSection display/AddOn';
import FinishUp from './MainSection display/FinishUp';

class MainDisplay extends React.Component {
  render() {
    const section =
      this.props.currentCount === 1 ? (
        <Form />
      ) : this.props.currentCount === 2 ? (
        <SelectPlan />
      ) : this.props.currentCount === 3 ? (
        <AddOn />
      ) : this.props.currentCount === 4 ? (
        <FinishUp />
      ) : (
        <Form />
      );

    return <div>{section}</div>;
  }
}

export default MainDisplay;
