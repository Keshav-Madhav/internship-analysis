"use client"

import { 
  Chart,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'; 

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

import { Pie } from 'react-chartjs-2';

const InternshipsPieChart = () => {

  const data = {
    labels: ['2 Months', '3 Months', '4 Months', '6 Months', '8 Months', '12 Months'],
    datasets: [
      {
        label: 'Internships',
        data: [20, 30, 25, 15, 5, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        title: {
          display: true,
          text: 'Internship Duration',
        },
        ticks: {
          display: false, // Hide x-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        beginAtZero: true,
        title: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value*100 / sum);
          let decimalPart = percentage - Math.floor(percentage);
          if(decimalPart === 0) {
            percentage = Math.floor(percentage);
          } else {
            percentage = parseFloat(percentage.toFixed(1));
          }
          return percentage + "%";
        },
        color: '#fff',
        font: {
          size: 9, // You can adjust this value to decrease or increase the font size
        },
      }      
    },
  };

  return (
    <div className='h-[18rem] w-[18rem] p-[2rem]'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default InternshipsPieChart
