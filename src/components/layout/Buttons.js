import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Buttons(props) {
  const location = useLocation();

  return (
    <div className='main-content-btn'>
      <Link
        to={
          location.pathname.includes('plans')
            ? '/'
            : location.pathname.includes('addons')
            ? 'plans'
            : location.pathname.includes('finish')
            ? 'addons'
            : ''
        }
      >
        <button
          className={location.pathname === '/' ? 'hidden' : 'go-back-btn'}
        >
          Go Back
        </button>
      </Link>

      <Link
        to={
          location.pathname === '/'
            ? 'plans'
            : location.pathname.includes('plans')
            ? 'addons'
            : location.pathname.includes('addons')
            ? 'finish'
            : 'ThankYou'
        }
      >
        <button
          className='next-step-btn'
          type='submit'
          disabled={
            location.pathname === '/' && props.form.phone
              ? false
              : location.pathname.includes('plans') && props.selectedPlan
              ? false
              : location.pathname.includes('addons')
              ? false
              : location.pathname.includes('finish') && props.selectedPlan
              ? false
              : true
          }
        >
          {location.pathname.includes('finish') ? 'Confirm' : 'Next Step'}
        </button>
      </Link>
    </div>
  );
}
