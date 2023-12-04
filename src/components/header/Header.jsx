import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container-fluid col-sm-12">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Expense Tracker
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <Link to="/" className="btn">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/grid" className="btn">
                Grid
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/analytics" className="btn">
                Analytics
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
