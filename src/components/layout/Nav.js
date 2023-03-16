import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      {
        id: 1,
        text: 'YOUR INFO',
      },
      {
        id: 2,
        text: 'SELECT PLAN',
      },
      {
        id: 3,
        text: 'ADD-ONS',
      },
      {
        id: 4,
        text: 'SUMMARY',
      },
    ];
  }

  render() {
    return this.options.map((option) => {
      return (
        <div key={option.id} className='nav-item'>
          <button
            onClick={() => this.props.setCount(option.id)}
            className={
              this.props.stateCount === option.id ? 'button-change' : 'nav-btn'
            }
          >
            <b>{option.id}</b>
          </button>
          <div className='nav-text'>
            <p className='step'> STEP {option.id}</p>
            <p className='text'>{option.text}</p>
          </div>
        </div>
      );
    });
  }
}

export default Nav;
