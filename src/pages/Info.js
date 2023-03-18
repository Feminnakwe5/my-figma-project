import React from 'react';
import { inputData } from '../data';
import { useOutletContext } from 'react-router-dom';

export default function Info() {
  const { handleSubmit, formData } = useOutletContext();
  return (
    <form>
      <div className='form'>
        <h1> Personal info</h1>
        <p> Please provide your name, email address ,and phone number</p>
      </div>
      <div className='form-info'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='e.g. Stephen King'
          name='name'
          className='form-input'
          onChange={(e) => handleSubmit(e)}
          value={formData.name}
        />
      </div>
      <div className='form-info'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          name='email'
          className='form-input'
          onChange={(e) => handleSubmit(e)}
          value={formData.email}
        />
      </div>
      <div className='form-info'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          placeholder='e.g. Stephen King'
          name='phone'
          className='form-input'
          onChange={(e) => handleSubmit(e)}
          value={formData.phone}
        />
      </div>
    </form>
  );
}
