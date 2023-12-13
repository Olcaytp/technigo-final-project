import React, { useState } from 'react';
import './App.css'
import Create from './components/create/Create'
import Home from './Home'
import Analytics from './components/analytics/Analytics'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Update from './components/update/Update'
import HomePage from './components/homepage/HomePage'

const NotFoundPage = () => {
  return <Navigate to="/" />;
};

function App() {
  const [isBackgroundEnabled, setBackgroundEnabled] = useState(false);

  const toggleBackground = () => {
    setBackgroundEnabled(!isBackgroundEnabled);
  };

  return (
    <BrowserRouter>
    <div className={`container-fluid text-center ${isBackgroundEnabled ? 'background-enabled' : ''}`}>
        <div className="custom-switch form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={isBackgroundEnabled}
            onChange={toggleBackground}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Switch Background
          </label>
        </div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/grid" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/analytics" element={<Analytics/>}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
