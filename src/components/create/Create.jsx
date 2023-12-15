import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../reducer/TransactionReducer';
import { useNavigate } from 'react-router-dom';

function CreateTransaction() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gerekli alanların kontrolü
  if (!name || !type || !category || !amount || !date) {
    alert('Please fill in all fields.');
    return;
  }
    const newTransaction = {
      name,
      type,
      category,
      amount,
      date,
    };

    dispatch(addTransaction(newTransaction));
    navigate('/grid');
  };

  return (
    <div className="container-fluid">
  <h3 className="text-center">Add new transaction</h3>
  <div className="d-flex flex-column w-50 mx-auto">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" id="nameLabel">
          Transaction Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          aria-labelledby="nameLabel"
          aria-label="Transaction Name"
          title="Transaction Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="type" id="typeLabel">
          Transaction Type:
        </label>
        <select
          name="type"
          id="type"
          className="form-control"
          onChange={(e) => setType(e.target.value)}
          aria-labelledby="typeLabel"
          aria-label="Select Transaction Type"
          title="Select Transaction Type"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category" id="categoryLabel">
          Transaction Category:
        </label>
        <select
          name="category"
          id="category"
          className="form-control"
          onChange={(e) => setCategory(e.target.value)}
          aria-labelledby="categoryLabel"
          aria-label="Select Transaction Category"
          title="Select Transaction Category"
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
          <option value="Market">Market</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount" id="amountLabel">
          Transaction Amount:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="form-control"
          onChange={(e) => setAmount(e.target.value)}
          aria-labelledby="amountLabel"
          aria-label="Transaction Amount"
          title="Transaction Amount"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date" id="dateLabel">
          Transaction Date:
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
          aria-labelledby="dateLabel"
          aria-label="Transaction Date"
          title="Transaction Date"
        />
      </div>
      <br />
      <button
        id="addTransactionButton"
        className="btn btn-info"
        type="submit"
        aria-label="Add Transaction"
        title="Add Transaction"
      >
        Add Transaction
      </button>
      <button
        id="backButton"
        type="button"
        className="btn btn-secondary ml-3"
        onClick={() => navigate('/grid')}
        aria-label="Back"
        title="Back"
      >
        Back
      </button>
    </form>
  </div>
</div>
  );
  
  
}

export default CreateTransaction;
