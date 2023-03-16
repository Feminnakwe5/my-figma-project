import React from 'react';

export default function Buttons() {
  return (
    <div className='main-content-btn'>
      <button
        onClick={this.props.subtractCount}
        className={this.props.stateCount === 1 ? 'hidden' : 'go-back-btn'}
      >
        Go Back
      </button>

      <button
        onClick={this.props.addCount}
        className='next-step-btn'
        type='submit'
        // form='form1'
        disabled={this.props.formSubmit}
      >
        {this.props.stateCount === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
