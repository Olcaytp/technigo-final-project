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
      <div className=" d-flex flex-column w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            className="form-control"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
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
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-info" type="submit">
          Add
        </button>
        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/grid')}>
        Back
      </button>
      </form>
      </div>
    </div>
  );
}

export default CreateTransaction;
