import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <h2 className='expense-month'>{month}</h2>
      <h2 className='expense-year'>{year}</h2>
      <h2 className='expense-day'>{day}</h2>
    </div>
  );
};

export default ExpenseDate;
