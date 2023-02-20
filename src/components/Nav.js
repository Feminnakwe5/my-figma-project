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
        <div key={option.id}>
          <button onClick={() => this.props.setCount(option.id)}>
            {option.id}
          </button>
          <p> step{option.id}</p>
          <h5> {option.text} </h5>
        </div>
      );
    });
  }
}

export default Nav;
