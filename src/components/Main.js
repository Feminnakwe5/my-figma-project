import React from 'react';
import MainDisplay from './MainDisplay';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainDisplay />
        <div>
          {/* find how to conditionally render/display button with css */}
          <button onClick={this.props.subtractCount}> Go back </button>
          <button onClick={this.props.addCount}> Next step </button>
        </div>
      </div>
    );
  }
}

export default Main;
