import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../../App.css'


export default function Buttons({ onFrequencyChange, onTypeChange, onResetFilters, onViewChange }) {

  return (
    <div className="parentdiv container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-xs-4">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownFrequencyButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              aria-labelledby="labeldivFrequency"
            >
              Select Frequency
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Week")}
              >
                Last Week
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Month")}
              >
                Last Month
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Year")}
              >
                Last Year
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Custom Range")}
              >
                Custom Range
              </a>
            </div>
          </div>
        </div>
  
        <div className="type col-xs-4 ml-3">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownTypeButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Select Type"
            >
              Select Type
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownTypeButton">
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onTypeChange("income")}
                aria-label="Select Income Type"
              >
                Income
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => onTypeChange("expense")}
                aria-label="Select Expense Type"
              >
                Expense
              </a>
            </div>
          </div>
        </div>
  
        <div className="col-xs-4 ml-3 ">
          <button
            type="button"
            className="resetfilter btn btn-secondary"
            onClick={onResetFilters}
            aria-label="Reset Filters"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="griddiv row d-flex justify-content-center">
        <div className="col-xs-4">
          <NavLink
            to="/grid"
            className="btn btn-secondary"
            activeclassname="active"
            onClick={() => onViewChange('table')}
            aria-label="View as Grid"
          >
            Grid
          </NavLink>
        </div>
        <div className="col-xs-4 ml-3">
          <NavLink
            to="/analytics"
            className="btn btn-secondary"
            activeclassname="active"
            onClick={() => onViewChange('analytics')}
            aria-label="View Analytics"
          >
            Analytics
          </NavLink>
        </div>
        <div className="transbut col-xs-4 ml-3">
          <Link
            to="/create"
            className="btn btn-secondary"
            aria-label="Add Transaction"
          >
            Add Transaction
          </Link>
        </div>
      </div>
    </div>
  );
  
}
