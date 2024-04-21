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
 import { useRouter } from 'next/navigation';

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

const SkillsBarGraph = ({page, skillsData}) => {
  const router = useRouter();

  const data = {
    labels: skillsData.map((skill) => skill.skill),
    datasets: [
      {
        label: 'Internships',
        data: skillsData.map((skill) => skill.count),
        backgroundColor: colors[page % colors.length].body,
        borderColor: colors[page % colors.length].border,
        borderWidth: 1,
    }    
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Skills in Demand',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
    },
    maintainAspectRatio: false,
    onClick: (event, array) => {
      if (array.length > 0) {
        const chartElement = array[0];
        const label = data.labels[chartElement.index];
        const value = data.datasets[0].data[chartElement.index];
        router.push(`/skills/${label.replaceAll(" ", "_")}`);
      }
    }
  };
  

  return (
    <div className='h-[45vh] w-[80vw]'>
      <Bar data={data} options={options} className='h-full w-full'></Bar>
    </div>
  )
}

export default SkillsBarGraph
