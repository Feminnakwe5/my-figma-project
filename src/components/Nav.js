import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();
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
        <div>
          <div>{option.id}</div>
          <p> step{option.id}</p>
          <h5> {option.text} </h5>
        </div>
      );
    });
  }
}

export default Nav;
