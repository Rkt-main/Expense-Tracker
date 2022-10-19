import Expenseitem from "./Expenseitem";
import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredyear, setFiteredyear] = useState("");

  const ChangeExpenseYear = (selectedyear) => {
    setFiteredyear(selectedyear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  let ExpenseContent;

  if (filteredExpenses.length > 0) {
    {
      ExpenseContent = filteredExpenses.map((expense) => (
        <Expenseitem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ));
    }
  } else {
     ExpenseContent = <p>No content found</p>;
  }

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredyear}
        onExpenseYear={ChangeExpenseYear}
      />
      {ExpenseContent}
    </div>
  );
};

export default Expenses;
