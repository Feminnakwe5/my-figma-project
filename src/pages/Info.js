import React from 'react';
import { inputData } from '../data';

const input = inputData.map((input) => {
  return (
    <div key={input.id} className='form-info'>
      <label htmlFor={input.name}>{input.name}</label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.name}
        className='form-input'
        required
      />
    </div>
  );
});

export default function Info() {
  return (
    <form id='form1'>
      <div className='form'>
        <h1> Personal Info</h1>
        <p> Please provide your name, email address ,and phone number</p>
      </div>
      {input}
    </form>
  );
}
