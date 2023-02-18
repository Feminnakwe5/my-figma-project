import './App.css';
import React from 'react';
import Main from './components/Main';
import Nav from './components/Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      isMonthly: true,
      addOn: [],
      plan: [],
    };
    this.addCount = this.addCount.bind(this);
    this.subtractCount = this.subtractCount.bind(this);
    this.togglePlan = this.togglePlan.bind(this);
    this.setCount = this.setCount.bind(this);
  }

  test() {
    fetch('/verifyEmail', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  addCount() {
    this.state.count < 5 &&
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
  }

  subtractCount() {
    this.state.count > 1 &&
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    console.log(this.state.count);
  }

  togglePlan() {
    this.setState((prevState) => ({
      isMonthly: !prevState.isMonthly,
    }));
    console.log(this.state.count);
  }

  setCount(id) {
    this.setState(() => ({
      count: id,
    }));
    console.log(this.state.count);
  }

  // add function for changePlan

  render() {
    return (
      <>
        <div className='main'>
          <div className='Nav'>
            <Nav stateCount={this.state.count} setCount={this.setCount} />
            {/* <button onClick={this.test}> click me </button> */}
          </div>
          <div className='main-section'>
            <Main
              addCount={this.addCount}
              subtractCount={this.subtractCount}
              stateCount={this.state.count}
              togglePlan={this.togglePlan}
              selectedAddOns={this.state.addOn}
              selectedPlan={this.state.plan}
              isMonthly={this.state.isMonthly}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
