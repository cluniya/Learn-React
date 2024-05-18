import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseDataofUser = {
      title: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDataofUser);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setIsFormVisible(false); 
  };

  return (
    <div>
      {isFormVisible ? (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input type="text" value={enteredTitle} id="title" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input type="number" value={enteredAmount} id="amount" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input type="date" value={enteredDate} id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={toggleFormVisibility}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={toggleFormVisibility}>Add Expense</button>
      )}
    </div>
  );
};

export default ExpenseForm;
