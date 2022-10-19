import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseitem.css";

const Expenseitem = (props) => {
  return (
    <div className="expense-container">
      <div className="expenseitem-box">
        <ExpenseDate  date={props.date}/>
        <h2 className="expense-title">{props.title}</h2>
        <div className="expense-amount"> ${props.amount}</div>
      </div>
    </div>
  );
};

export default Expenseitem;
