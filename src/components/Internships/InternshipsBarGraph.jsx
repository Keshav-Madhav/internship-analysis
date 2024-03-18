"use client"

import { 
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
 } from 'chart.js'; 

 Chart.register(
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from 'react-chartjs-2';

const InternshipsBarGraph = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Internships',
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Internships',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
    },
    maintainAspectRatio: false,
  };
  

  return (
    <div className='h-[40vh] w-[50vw]'>
      <Bar data={data} options={options} className='h-full w-full'></Bar>
    </div>
  )
}

export default InternshipsBarGraph