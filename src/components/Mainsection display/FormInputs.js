import React from 'react';

class FormInputs extends React.Component {
  constructor() {
    super();
    this.inputs = [
      {
        id: 1,
        name: 'Name',
        type: 'text',
        placeholder: 'e.g. Stephen King',
      },
      {
        id: 2,
        name: 'Email Address',
        type: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
      },
      {
        id: 3,
        name: 'Phone Number',
        type: 'tel',
        placeholder: 'e.g. +1 234 567 890',
      },
    ];
  }

  render() {
    return this.inputs.map((input) => {
      return (
        <div key={input.id} className='form-info'>
          <label htmlFor={input.name}>{input.name}</label>
          <input
            type={input.type}
            placeholder={input.placeholder}
            id={input.name}
            className='form-input'
          />
        </div>
      );
    });
  }
}

export default FormInputs;
