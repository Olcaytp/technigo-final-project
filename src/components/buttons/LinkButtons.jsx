import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function LinkButtons({ onViewChange }) {
    return (
        <div class="parentdiv container-fluid">
          <div class="row d-flex justify-content-center">
            <div class="col-xs-4">
              <div class="dropdown">
              </div>
            </div>
    
            <div class="type col-xs-4 ml-3">
              <div class="dropdown">
              </div>
            </div>
    
            <div class="col-xs-4 ml-3">
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
            </div>
          </div>
        </div>
      );
}
