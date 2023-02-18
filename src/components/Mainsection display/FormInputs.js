import React from 'react';

class FormInputs extends React.Component {
  constructor() {
    super();
    this.inputs = [
      {
        name: 'Name',
        type: 'text',
        placeholder: 'e.g. Stephen King',
      },
      {
        name: 'Email Address',
        type: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
      },
      {
        name: 'Phone Number',
        type: 'tel',
        placeholder: 'e.g. +1 234 567 890',
      },
    ];
  }

  render() {
    return this.inputs.map((input) => {
      return (
        <div>
          <label for={input.name}>{input.name}</label>
          <input
            type={input.type}
            placeholder={input.placeholder}
            id={input.name}
          />
        </div>
      );
    });
  }
}

export default FormInputs;
