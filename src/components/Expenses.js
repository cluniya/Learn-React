import React,{useState} from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
