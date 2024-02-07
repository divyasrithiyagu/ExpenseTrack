import React, { useState } from 'react';
import './FamilyExpenseHomePage.css';
import { useNavigate } from 'react-router-dom';

const FamilyExpenseHomePage = () => {
  const nav=useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddExpense = () => {
    if (description && amount) {
      const newExpense = {
        id: new Date().getTime(),
        description,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpense]);

      // Update total expense
      setTotalExpense(totalExpense + newExpense.amount);
 
      // Reset form fields
      setDescription('');
      setAmount('');
    } else {
      // Show alert if description or amount is missing
      window.alert('Please enter both description and amount.');
    }
  };

  return (
    <div className="family-expense-home-page">
      <h1>Family Expense Tracker</h1>
      <div className="add-expense-form">
        <h2>Add Expense</h2>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description}: ₹ {expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="total-expense">
        <h2>Total Expense</h2>
        <p>₹ {totalExpense.toFixed(2)}</p>
      </div>
      
    </div>
  );
};

export default FamilyExpenseHomePage;