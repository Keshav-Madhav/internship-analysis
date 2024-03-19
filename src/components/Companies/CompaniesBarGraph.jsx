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

const CompaniesBarGraph = () => {

  const data = {
    labels: ['Front End Dev', 'Backend Dev', 'Graphic Designer', 'Content Writer', 'Data Analyst', 'UI/UX Designer', 'Mobile App Dev', 'SEO Specialist', 'Digital Marketer', 'Network Engineer', 'Database Admin', 'System Analyst', 'Information Security', 'Full Stack Dev', 'Product Manager'],
    datasets: [
      {
        label: 'Internships',
        data: [30, 35, 40, 25, 20, 30, 35, 15, 20, 10, 15, 10, 5, 30, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Internship Position',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Positions',
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

export default CompaniesBarGraph
