import React from "react";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="expense-item">
      <p>
        <strong>{expense.name}</strong> - ${expense.amount} - {expense.category} - {expense.date}
      </p>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
