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
import { colors } from '@/utils/colors';

const InternshipsBarGraph = ({page, internshipsData}) => {

  const data = {
    labels: internshipsData.map((internship) => internship.position),
    datasets: [
      {
        label: 'Internships',
        data: internshipsData.map((internship) => internship.count),
        backgroundColor: colors[page % colors.length].body,
        borderColor: colors[page % colors.length].border,
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

export default InternshipsBarGraph
