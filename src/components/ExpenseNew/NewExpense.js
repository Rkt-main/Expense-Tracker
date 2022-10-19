import React, { useState } from "react";

import Expenseform from "./Expenseform";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [InitForm, setInitForm] = useState(false);

  const openFormHandler = () => {
    setInitForm(true);
  };

  const ExpenseDataHandler = (expense) => {
    const expensedata = {
      ...expense,
    };
    props.onAddExpense(expensedata);
  };

  const cancelFormHandelr = () => {
    setInitForm(false);
  };

  return (
    <div className="new-expense">
      {!InitForm && <button onClick={openFormHandler}>Add New Expense</button>}
      {InitForm && (
        <Expenseform
          onCancel={cancelFormHandelr}
          onsavExpenseData={ExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
