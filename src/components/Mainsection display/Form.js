import React from 'react';
import FormInputs from './FormInputs';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1> Personal Info</h1>
        <p> Please provide your name, email address ,and phone number</p>
        <FormInputs />
      </div>
    );
  }
}

export default Form;
