import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../reducer/TransactionReducer';

const Transaction = ({ transactions, selectedFrequency, selectedType }) => {
  const [itemsPerPage] = useState(5);
  const urlParams = new URLSearchParams(window.location.search);
  const initialPage = parseInt(urlParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTransaction({ id: id }));
  };

  // Helper functoin for filtering
  const isDateInSelectedFrequency = (dateString, frequency) => {
    const currentDate = new Date();
    const transactionDate = new Date(dateString);

    switch (frequency) {
      case "Last Week":
        const lastWeekStartDate = new Date(currentDate);
        lastWeekStartDate.setDate(currentDate.getDate() - 7);

        return (
          transactionDate >= lastWeekStartDate && transactionDate <= currentDate
        );
      case "Last Month":
        const lastMonthStartDate = new Date(currentDate);
        lastMonthStartDate.setMonth(currentDate.getMonth() - 1);
        lastMonthStartDate.setDate(1);

        const lastMonthEndDate = new Date(currentDate);
        lastMonthEndDate.setDate(0);

        return (
          transactionDate >= lastMonthStartDate &&
          transactionDate <= lastMonthEndDate
        );
      case "Last Year":
        const lastYearStartDate = new Date(currentDate);
        lastYearStartDate.setFullYear(currentDate.getFullYear() - 1);
        lastYearStartDate.setMonth(0);
        lastYearStartDate.setDate(1);

        const lastYearEndDate = new Date(currentDate);
        lastYearEndDate.setFullYear(currentDate.getFullYear() - 1);
        lastYearEndDate.setMonth(11);
        lastYearEndDate.setDate(31);

        return (
          transactionDate >= lastYearStartDate &&
          transactionDate <= lastYearEndDate
        );
      
      default:
        return true; // If no filters are selected, return true for all transactions
    }
  };

  // Filtering Actions
  const filteredTransactions = transactions.filter((transaction) => {
    if (
      selectedFrequency &&
      !isDateInSelectedFrequency(transaction.date, selectedFrequency)
    ) {
      return false;
    }

    if (selectedType && transaction.type !== selectedType) {
      return false;
    }

    return true;
  });

  // Paginations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function for changing page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  return (
    <div className="container-fluid">
      <div className="col-xs-12 d-flex justify-content-center">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((transaction, index) => (
                <tr key={index} className="text-center">
                  <td>{transaction.id}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <Link
                      to={`/edit/${transaction.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="btn btn-sm btn-danger ml-2"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-xs-12 d-flex justify-content-center">
        <Pagination>
          {[
            ...Array(Math.ceil(filteredTransactions.length / itemsPerPage)),
          ].map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default Transaction;
