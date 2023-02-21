import React from 'react';
import FormInputs from './FormInputs';

class Form extends React.Component {
  render() {
    return (
      <div className='form'>
        <div>
          <h1> Personal Info</h1>
          <p> Please provide your name, email address ,and phone number</p>
        </div>
        <div className='form-inputs'>
          <FormInputs />
        </div>
      </div>
    );
  }
}

export default Form;
