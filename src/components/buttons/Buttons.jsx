import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Buttons({ onFrequencyChange, onTypeChange, onResetFilters, onViewChange }) {

  return (
    <div class="parentdiv container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-4">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Frequency
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Week")}
              >
                Last Week
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Month")}
              >
                Last Month
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Last Year")}
              >
                Last Year
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onFrequencyChange("Custom Range")}
              >
                Custom Range
              </a>
            </div>
          </div>
        </div>

        <div class="type col-xs-4 ml-3">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Type
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onTypeChange("income")}
              >
                Income
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => onTypeChange("expense")}
              >
                Expence
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-4 ml-3">
          <button
            type="button"
            class=" resetfilter btn btn-outline-primary"
            onClick={onResetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="griddiv row d-flex justify-content-center">
        <div className="col-xs-4">
          <NavLink
            to="/grid"
            className="btn btn-outline-primary"
            activeclassname="active"
            onClick={() => onViewChange('table')}
          >
            Grid
          </NavLink>
        </div>
        <div className="col-xs-4 ml-3">
          <NavLink
            to="/analytics"
            className="btn btn-outline-primary"
            activeclassname="active"
            onClick={() => onViewChange('analytics')}
          >
            Analytics
          </NavLink>
        </div>
        <div className="transbut col-xs-4 ml-3">
          <Link to="/create" className="btn btn-success">
            Add Transaction
          </Link>
        </div>
      </div>
    </div>
  );
}
