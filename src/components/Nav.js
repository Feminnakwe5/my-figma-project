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
            className='nav-btn'
          >
            {option.id}
          </button>
          <div className='nav-text'>
            <p> STEP {option.id}</p>
            <p>
              <b>{option.text}</b>
            </p>
          </div>
        </div>
      );
    });
  }
}

export default Nav;
