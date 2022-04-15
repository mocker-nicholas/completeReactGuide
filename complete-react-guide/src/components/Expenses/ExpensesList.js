import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // Determine your expensesContent
  let expensesContent = <p>No Expenses Found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  if (props.items.length > 0) {
    expensesContent = props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
