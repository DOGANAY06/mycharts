export const options = {
  responsive: true, // Grafiğin duyarlılığını etkinleştir (ekrana göre boyutlanabilirlik)
  plugins: {
    legend: {
      display:true,
    },
    title: {
      display: true, // Başlığı görüntüle
      text: 'Katılımcı Girişleri', // Başlık metni
    },
    colors: {
      enabled: true, // Özel renkleri etkinleştir
    },
    tooltip: {
      callbacks: {
        title: (tooltipItems) => {
          return ''; // Tooltip'te başlık oluşturmayın
        },
        label: function (context) {
          let label = context.dataset.label || '';

          if (label) {
            label += 'Katılımcı Girişleri'; // Özel etiket metni ekle
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y} kişi`; // Etikete y-eksen değerini ekle
          }
          return label;
        },
        afterLabel: (tooltipItem) => {
          return tooltipItem.label; // Ana etiketten sonraki etiketi göster
        },
        labelColor() {
          return {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            borderWidth: 3,
          };
        },
        labelTextColor: function (context) {
          return '#050305'; // Etiket için metin rengini ayarla
        },
        afterLabelTextColor: function (context) {
          return '#495434'; // Ana etiketin sonrasındaki metin rengini ayarla
        },
      },
      backgroundColor: '#fff', // Tooltip arka plan rengi
      borderColor: '#frfrfr', // Tooltip kenarlık rengi
      usePointStyle: false, // Nokta stili kullanma
      showShadow: true, // Tooltip'te gölgeyi göster
    },
  },
  scales: {
    x: {
      display: true, // x-eksenini görüntüle
    },
    y: {
      grid: {
        display: true, // y-ekseninde ızgarayı görüntüle
      },
      border: {
        display: true, // y-ekseninde kenarlığı görüntüle
      },
      ticks: {
        display: true, // y-ekseninde işaretleri görüntüle
      },
    },
  },
};
