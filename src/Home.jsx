import React, { useState, View } from 'react'
 import { useSelector } from 'react-redux'

import Header from './components/header/Header'
import Transaction from './components/transactionTable/Transaction'
import Buttons from './components/buttons/Buttons'
import Analytics from './components/analytics/Analytics'

function Home(){
const transactions = useSelector((state) => state.transactions);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedView, setSelectedView] = useState('table');


    const handleFrequencyChange = (frequency) => {
    setSelectedFrequency(frequency);
    };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleResetFilters = () => {
    setSelectedFrequency(null);
    setSelectedType(null);
  };

  const handleViewChange = (view) => {
    setSelectedView(view);
  }
    return (
      <>
        <Header />
        <Buttons
        onFrequencyChange={handleFrequencyChange}
        onTypeChange={handleTypeChange}
        onResetFilters={handleResetFilters}
        onViewChange={handleViewChange}
      />
        {selectedView === "table" && (
        <Transaction transactions={transactions} selectedFrequency={selectedFrequency} selectedType={selectedType} /> )}
        {selectedView === "analytics" && <Analytics />}
      </>
    );
}
export default Home
