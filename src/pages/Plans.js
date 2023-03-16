import React from 'react';
import { plansData } from '../data';
import { useOutletContext } from 'react-router-dom';

export default function Plans() {
  const { card, planSelect, isMonthly, togglePlan } = useOutletContext();
  const planCards = plansData.map((plan) => {
    return (
      <div
        key={plan.id}
        className={card.id === plan.id ? 'selected-plan ' : 'plan-card'}
        onClick={() => planSelect(plan.id)}
      >
        <img src={plan.image} alt={plan.alt} />
        <div className='plan-card-text'>
          <h3>{plan.title}</h3>
          <p className='price'>
            ${isMonthly ? plan.monthPrice + '/mo' : plan.yearPrice + '/yr'}
          </p>
          {!isMonthly && <p className='discount'>{plan.yearDiscount}</p>}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className='plan-text'>
        <h1>Select your plan</h1>
        <p>you have the option of monthly or yearly</p>
      </div>
      <div className='plans'>{planCards}</div>
      <div className='toggle-plan'>
        <span className={isMonthly ? 'selected' : ''}>Monthly</span>
        <input
          className='toggle-switch'
          type='checkbox'
          onClick={() => togglePlan()}
        />
        <span className={isMonthly ? '' : 'selected'}>Yearly</span>
      </div>
    </>
  );
}
