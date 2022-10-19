import React from "react";

import "../components/ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const Changeyearhandler = (event) => {
    props.onExpenseYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={Changeyearhandler}>
          <option>SELECT</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2022">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
