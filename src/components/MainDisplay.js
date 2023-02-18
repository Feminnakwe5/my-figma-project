import React from 'react';
import Form from './MainSection display/Form';
import SelectPlan from './MainSection display/SelectPlan';
import AddOn from './MainSection display/AddOn';
import FinishUp from './MainSection display/FinishUp';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Form />
        <SelectPlan />
        <AddOn />
      </>
    );
  }
}

export default MainDisplay;
