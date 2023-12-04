import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Header from '../header/Header'

const HomePage = () => {
  // Örnek grafik verileri
  const dummyChartData1 = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Data',
        data: [50, 30, 20],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const dummyChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
        hoverBackgroundColor: '#36A2EB',
        hoverBorderColor: '#36A2EB',
        data: [65, 59, 80, 81, 56],
      },
      {
        label: 'Expense',
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
        hoverBackgroundColor: '#FF6384',
        hoverBorderColor: '#FF6384',
        data: [28, 48, 40, 19, 86],
      },
    ],
  };

  const dummyChartData3 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 40, 120, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container-fluid ">
      <Header />
      <div className='mt-5' style={{backgroundColor:'white', opacity:'0.7'}}>
      <h1 className="text-center">Welcome to My Finance App</h1>
      <p className="text-center font-weight-bold">
        Track and manage your expenses and income easily.
      </p>
      </div>
      <div className="row graph">
        <div className="col-xs-12">
          <div className="analyticdiv ">
            <div class="card ml-3 d-flex flex-column justify-content-center" style={{backgroundColor:'white', opacity:'0.7'}}>
              <div class="card-body">
                <h5 class="card-title">Line Chart</h5>
                <p class="card-text">
                  <Line data={dummyChartData1} options={options} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 homesecond">
          <div className="analyticdiv ">
            <div class="card ml-3 d-flex flex-column justify-content-center"style={{backgroundColor:'white', opacity:'0.7'}}>
              <div class="card-body">
                <h5 class="card-title">Income Categories</h5>
                <p class="card-text">
                  <Bar data={dummyChartData2} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 homethird">
          <div className="analyticdiv">
            <div class="card ml-3 d-flex flex-column justify-content-center"style={{backgroundColor:'white', opacity:'0.7'}}>
              <div class="card-body">
                <h5 class="card-title">Expense Categories</h5>
                <p class="card-text">
                  <Bar data={dummyChartData3} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
