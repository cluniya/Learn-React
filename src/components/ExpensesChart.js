import React from 'react'
import Chart from '../chart/Chart';

const ExpensesChart = (props) => {
  return (
    <div>
      <Chart chartExpense={props.filteredExpenseschart}/>
    </div>
  )
}

export default ExpensesChart
