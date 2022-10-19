import React, { Component, useState, useSyncExternalStore } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/ExpenseNew/NewExpense";

const expenseitem = [
  {
    date: new Date(2021, 8, 1),
    title: "Car Insurance",
    amount: 280,
  },
  {
    date: new Date(2022, 8, 1),
    title: "Mob Insurance",
    amount: 880,
  },
  {
    date: new Date(2020, 8, 1),
    title: "life Insurance",
    amount: 1280,
  },
];

function App() {
  const [initialexpense, setinitialexpense] = useState(expenseitem);

  const addExpensehandler = (expense) => {
    setinitialexpense((prevexpense) => {
      return [...prevexpense, expense];
    });
  };

  const [filteredyear, setFiteredyear] = useState("");

  const ChangeExpenseYear = (selectedyear) => {
    setFiteredyear(selectedyear);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses items={initialexpense} />
    </div>
  );
}

export default App;
