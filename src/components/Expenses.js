import React from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
