import React from 'react';
import { Pie } from 'react-chartjs-2';
import { options } from './PieChartOptions'; // PieChart için özel seçenekler

// Verinizi ve seçeneklerinizi tanımlayın
const data = {
  labels: ['Kırmızı', 'Mavi', 'Sarı'],
  datasets: [
    {
      label: 'İlk Veri Setim',
      data: [10, 15, 23],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

// PieChart bileşeni
const PieChart = () => {
  // Grafik stili
  const graphStyle = {
    minHeight: '10rem',
    maxWidth: '540px',
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '0.375rem',
    padding: '1rem',
  };

  // PieChart bileşeni oluştur
  return (
    <div style={graphStyle}>
      <Pie data={data} options={options} />
    </div>
  );
};

// PieChart bileşenini dışa aktar
export default PieChart;
