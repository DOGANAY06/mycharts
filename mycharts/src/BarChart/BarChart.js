import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { options } from './BarChartOptions'; // Bar grafiği için özel seçenekler

Chart.register(...registerables);

// Rastgele veri oluştur
const graphData = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 10)
);

// Ay isimleri
const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];
// Etiketler: Ay isimlerini kullanarak döngü oluştur
const labels = graphData.map((_, index) => months[index % 12]);

// Grafik verileri
export const data = {
  labels,
  datasets: [
    {
      backgroundColor: '#5052ff',
      data: graphData,
      barPercentage: 1,
      borderRadius: 100,
      borderSkipped: true,
    },
  ],
};

// BarGraph bileşeni
const BarGraph = () => {
  // Grafik stilini tanımla
  const graphStyle = {
    minHeight: '10rem',
    maxWidth: '540px',
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '0.375rem',
    padding: '1rem',
  };

  return (
    <div style={graphStyle}>
      {/* Bar grafiği bileşeni */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
