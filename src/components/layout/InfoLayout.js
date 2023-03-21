import React from 'react';
import { Outlet } from 'react-router-dom';
import Buttons from './Buttons';
import { addCardsData } from '../../data';
import { plansData } from '../../data';

export default function InfoLayout() {
  const [addOn, setAddOns] = React.useState([]);
  const [card, setCard] = React.useState('');
  const [isMonthly, setIsMonthly] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  function addOnSelect(id) {
    const selectedAddOns = addOn.find((addOns) => addOns.id === id);
    const updatedAddOns = selectedAddOns
      ? addOn.filter((addOns) => addOns.id !== id)
      : [
          ...addOn,
          { ...addCardsData.find((addOns) => addOns.id === id), checked: true },
        ];
    setAddOns(updatedAddOns);
  }

  function planSelect(id) {
    const selectedPlan = plansData.find((plan) => plan.id === id);
    setCard(selectedPlan);
  }

  function togglePlan() {
    setIsMonthly((prevState) => !prevState);
    // setIsMonthly(false);
  }

  return (
    <div className='main-section'>
      <div className='content'>
        <Outlet
          context={{
            togglePlan,
            isMonthly,
            addOn,
            addOnSelect,
            card,
            planSelect,
            handleSubmit,
            setIsMonthly,
            formData,
          }}
        />
      </div>
      <Buttons selectedPlan={card} selectedAddOns={addOn} form={formData} />
    </div>
  );
}
