import './App.css';
import React from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import { plansData } from './components/MainSection display/PlanCards';
import { addCardsData } from './components/MainSection display/AddOnCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      isMonthly: true,
      addOn: [],
      plan: [],
      planClick: {},
      selectedAddOn: [],
    };
    this.addCount = this.addCount.bind(this);
    this.subtractCount = this.subtractCount.bind(this);
    this.togglePlan = this.togglePlan.bind(this);
    this.setCount = this.setCount.bind(this);
    this.planSelect = this.planSelect.bind(this);
    this.addOnSelect = this.addOnSelect.bind(this);
    this.test = this.test.bind(this);
    this.clearState = this.clearState.bind(this);
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
  }

  togglePlan() {
    this.setState((prevState) => ({
      isMonthly: !prevState.isMonthly,
    }));
  }

  setCount(id) {
    this.setState(() => ({
      count: id,
    }));
  }

  planSelect(id) {
    const selectedPlan = plansData.find((plan) => plan.id === id);
    this.setState(() => ({
      plan: [selectedPlan],
      planClick: selectedPlan,
    }));
  }

  addOnSelect(id) {
    const updatedAddOns = this.state.addOn.find((addOns) => addOns.id === id)
      ? this.state.addOn.filter((addOns) => addOns.id !== id)
      : [...this.state.addOn, addCardsData.find((addOns) => addOns.id === id)];
    this.setState(() => ({
      addOn: updatedAddOns,
      selectedAddOn: updatedAddOns,
    }));
  }

  clearState(value) {
    value === 'isMonthly'
      ? this.setState(() => ({ isMonthly: true }))
      : value === 'addOn'
      ? this.setState(() => ({ addOn: [] }))
      : value === 'plan'
      ? this.setState(() => ({ plan: [] }))
      : value === 'planClick'
      ? this.setState(() => ({ planClick: {} }))
      : this.setState(() => ({ selectedAddOn: [] }));
  }

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
              isMonthly={this.state.isMonthly}
              planState={this.state.plan}
              addOnState={this.state.addOn}
              stateCount={this.state.count}
              clickedPlan={this.state.planClick}
              addOnSelected={this.state.selectedAddOn}
              addCount={this.addCount}
              subtractCount={this.subtractCount}
              togglePlan={this.togglePlan}
              selectAddOns={this.addOnSelect}
              selectPlan={this.planSelect}
              clearState={this.clearState}
              setCount={this.setCount}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
