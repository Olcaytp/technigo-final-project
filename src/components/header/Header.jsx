import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container-fluid col-sm-12">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#" aria-label="Expense Tracker Home">
        Expense Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon" aria-hidden="true"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="btn" aria-label="Go to Home Page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grid" className="btn" aria-label="Go to Grid Page">
                Grid
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/analytics" className="btn" aria-label="Go to Analytics Page">
                Analytics
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
