import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import "chart.js/auto";
import Header from '../header/Header'
import Buttons from '../buttons/Buttons';
import LinkButtons from '../buttons/LinkButtons';
import ProgressBar from './ProgressBar';

export default function Analytics() {
  const [selectedView, setSelectedView] = useState('table');
  const transactions = useSelector((state) => state.transactions);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalIncomeCount, setTotalIncomeCount] = useState(0);
  const [totalExpenseCount, setTotalExpenseCount] = useState(0);
  const [incomeByCategory, setIncomeByCategory] = useState({});
  const [expenseByCategory, setExpenseByCategory] = useState({});
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    // Total Transactions adedini hesapla
    setTotalTransactions(transactions.length);

    // Gelir işlemlerinin adedini hesapla
    const incomeCount = transactions.reduce((count, transaction) => {
      return transaction.type === 'income' ? count + 1 : count;
    }, 0);

    //Gider işlemlerinin adedini hesapla
    const expenseCount = transactions.reduce((count, transaction) => {
      return transaction.type === 'expense' ? count + 1 : count;
    }, 0);

    // Gelir ve Gideri hesapla
    const income = transactions.reduce((total, transaction) => {
      return transaction.type === 'income' ? total + transaction.amount : total;
    }, 0);

    const expense = transactions.reduce((total, transaction) => {
      return transaction.type === 'expense' ? total + transaction.amount : total;
    }, 0);

    const incomeByCategoryData = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((acc, transaction) => {
        const category = transaction.category;
        acc[category] = (acc[category] || 0) + transaction.amount;
        return acc;
      }, {});
      console.log(incomeByCategoryData);

      const expenseByCategoryData = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((acc, transaction) => {
        const category = transaction.category;
        acc[category] = (acc[category] || 0) + transaction.amount;
        return acc;
      }, {});

    setTotalIncomeCount(incomeCount);
    setTotalExpenseCount(expenseCount);
    setTotalIncome(income);
    setTotalExpense(expense);
    setIncomeByCategory(incomeByCategoryData);
    setExpenseByCategory(expenseByCategoryData);
  }, [transactions]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(value);
  };

// Chart.js data
const chartDataIncome = {
  labels: ['Income', 'Expense'],
  datasets: [
    {
      data: [totalIncomeCount, totalTransactions - totalIncomeCount],
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384'],
    },
  ],
};

const chartTurnover = {
  labels: ['Income', 'Expense'],
  datasets: [
    {
      data: [totalIncome,totalExpense],
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384'],
    },
  ],
};

const handleViewChange = (view) => {
  setSelectedView(view);
}

  return (
    <div>
      <Header />
      <LinkButtons onViewChange={handleViewChange}/>
      {/*<Buttons />*/}
      <div className="container-fluid ">
        <h2 className="text-center">Analytic Graphics</h2>
        <div className="row graph">
          <div className="col-xs-12">
            <div className="analyticdiv ">
              <div className="card mb-3 d-flex flex-column justify-content-center">
                <div className="chart-container ">
                  <h5 className="chart-title text-center">
                    Transactions Chart
                  </h5>
                  <Doughnut data={chartDataIncome} />
                </div>
                <div className="card-body text-center">
                  {/* Total Transactions counts*/}
                  <p className="card-text mt-3">
                    Total Transactions: {totalTransactions}
                  </p>
                  {/* Income and expenses counts*/}
                  <p className="card-text">Income: {totalIncomeCount}</p>
                  <p className="card-text">Expense: {totalExpenseCount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="analyticdiv">
              <div className="card">
                <div className="chart-container">
                  <h5 className="chart-title text-center">Total Turnover </h5>
                  <Doughnut data={chartTurnover} />
                </div>
                <div className="card-body mt-3 text-center">
                  {/* Total Transactions Amount*/}
                  <p className="card-text">
                    Total Transactions: {formatCurrency(totalIncome + totalExpense)}
                  </p>
                  {/* Income and expense amounts*/}
                  <p className="card-text">Income: {formatCurrency(totalIncome)}</p>
                  <p className="card-text">Expense: {formatCurrency(totalExpense)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center">Analytic Analysis</h2>
        <div className="row graph">
          <div className="col-xs-12">
            <div className="analyticdiv ">
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                  <h5 class="card-title">Expense Categories</h5>
                  <p class="card-text">
                  {Object.entries(expenseByCategory).map(
                    ([category, categoryTotal]) => (
                      <div key={category} className="mb-3">
                        <p className="mb-1">{category}</p>
                        <ProgressBar
                          value={(categoryTotal / totalIncome) * 100}
                        />
                      </div>
                    )
                  )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="analyticdiv">
              <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                  <h5 class="card-title">Income Categories</h5>
                  <p class="card-text">
                  {Object.entries(incomeByCategory).map(
                    ([category, categoryTotal]) => (
                      <div key={category} className="mb-3">
                        <p className="mb-1">{category}</p>
                        <ProgressBar
                          value={(categoryTotal / totalIncome) * 100}
                        />
                      </div>
                    )
                  )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
