import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTransaction } from '../../reducer/TransactionReducer';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
    const params = useParams();
    const id = parseInt(params.id);
    console.log("id, params", id, params);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const transactions = useSelector((state)=> state.transactions)
    const existingtransaction =transactions.filter(f => f.id == id)
    console.log(existingtransaction[0]);
    const { name, type, category, amount, date } = existingtransaction[0];

    const [uname, setUname] = useState(name)
    const [utype, setUtype] = useState(type)
    const [ucategory, setUcategory] = useState(category)
    const [uamount, setUamount] = useState(amount)
    const [udate, setUdate] = useState(date)

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateTransaction({
            id: id,
            name: uname,
            type: utype,
            category: ucategory,
            amount: uamount,
            date: udate
        }))
        navigate('/grid')
    }
  return (
    <div className="container-fluid">
      <div className="col-xs-12 d-flex flex-column">
        <h3 className="text-center">Edit transaction</h3>
        <div className=" d-flex flex-column w-50 mx-auto">
          <form onSubmit={handleUpdate}>
            <div class="form-group" style={{ width: "200px", margin: 'auto' }}>
              <label for="FormControlInput1">Name</label>
              <input
                type="text"
                class="form-control"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                id="FormControlInput1"
                placeholder="name..."
              />
            </div>
            <div className="row d-flex flex-row justify-content-around">
              <div className="col-xs-6">
                <div class="form-group" style={{ width: "200px" }}>
                  <label for="FormControlSelect1">Type</label>
                  <select class="form-control" id="FormControlSelect1"
                    value={utype} onChange={(e) => setUtype(e.target.value)}
                  >
                    <option>Income</option>
                    <option>Expense</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-6">
                <div class="form-group" style={{ width: "200px" }}>
                  <label for="FormControlSelect2">Category</label>
                  <select class="form-control" id="FormControlSelect2"
                    value={ucategory} onChange={(e) => setUcategory(e.target.value)}
                  >
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Education</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Market</option>
                    <option>Entertainment</option>
                    <option>Electronics</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row d-flex flex-row justify-content-around">
              <div className="col-xs-6">
                <div className="form-group" style={{ width: "200px" }}>
                  <label htmlFor="amountInput">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    value={uamount}
                    onChange={(e) => setUamount(e.target.value)}
                    id="amountInput"
                    placeholder="Enter amount..."
                  />
                </div>
              </div>
              <div className="col-xs-6">
                <div className="form-group" style={{ width: "200px" }}>
                  <label htmlFor="dateInput">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={udate}
                    onChange={(e) => setUdate(e.target.value)}
                    id="dateInput"
                    placeholder="Select date..."
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-secondary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update
