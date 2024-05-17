import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {

    const saveExpenseDataHandler=(enterrdExpenseData)=>{
        const expensData = {...enterrdExpenseData,id:Math.random().toString()}
        props.onAddExpense(expensData);
    }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
