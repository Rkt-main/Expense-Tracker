import React, { useState } from "react";

import "./Expenseform.css";

const Expenseform = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");

  // const [userinput, setuserinput] = useState({
  //   usertitle: "",
  //   useramount: "",
  //   userdate: ""
  // });

  const titlechangehandler = (event) => {
    // setuserinput({
    //   ...userinput,
    //   usertitle : event.target.value
    // })
    setenteredtitle(event.target.value);
  };
  const amountchangehandler = (event) => {
    //  setuserinput({
    //   ...userinput,
    //   useramount: event.target.value
    //  })
    setenteredamount(event.target.value);
  };
  const datechangehandler = (event) => {
    //  setuserinput({
    //    ...userinput,
    //    userdate : event.target.value
    //  })
    setentereddate(event.target.value);
  };

  const submituserhandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    // console.log(expensedata);
    props.onsavExpenseData(expensedata);
    setenteredtitle("");
    setentereddate("");
    setenteredamount("");
  };

  return (
    <form onSubmit={submituserhandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titlechangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step=".001"
            value={enteredamount}
            onChange={amountchangehandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entereddate}
            onChange={datechangehandler}
          />
        </div>
        <div className="new-expense__control">
          <button onClick={props.onCancel}> Cancel Adding</button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default Expenseform;
