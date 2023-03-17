import React from 'react';
import { Outlet } from 'react-router-dom';
import Buttons from './Buttons';
import { addCardsData } from '../../data';
import { plansData } from '../../data';

export default function InfoLayout() {
  const [addOn, setAddOns] = React.useState([]);

  function addOnSelect(id) {
    const updatedAddOns = addOn.find((addOns) => addOns.id === id)
      ? addOn.filter((addOns) => addOns.id !== id)
      : [...addOn, addCardsData.find((addOns) => addOns.id === id)];
    setAddOns(updatedAddOns);
  }

  const [card, setCard] = React.useState([]);

  function planSelect(id) {
    const selectedPlan = plansData.find((plan) => plan.id === id);
    setCard(selectedPlan);
  }
  // const [Info, setInfo] = React.useState({
  //   count: 1,
  //   planClick: {},
  //   selectedAddOn: [],
  // });

  const [isMonthly, setIsMonthly] = React.useState(true);

  function togglePlan() {
    setIsMonthly((prevState) => !prevState);
  }

  return (
    <>
      <Outlet
        context={{
          togglePlan,
          isMonthly,
          addOn,
          addOnSelect,
          card,
          planSelect,
        }}
      />
      <Buttons />
    </>
  );
}
