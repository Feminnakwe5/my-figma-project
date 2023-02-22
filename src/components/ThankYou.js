import React from 'react';
import image from '../images/icon-thank-you.svg';

class ThankYou extends React.Component {
  render() {
    return (
      <div className='thank-you-page'>
        <img src={image} alt='thank-you' />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  }
}

export default ThankYou;
