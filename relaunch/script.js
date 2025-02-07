// 獲取畫布元素
const ctxTotal = document.getElementById('totalProgressChart').getContext('2d');
const ctxFeature = document.getElementById('featureProgressChart').getContext('2d');

// 功能名稱和其對應的進度數據（0-100%）
const featureData = {
  "Home": 50,
  "Navbar": 100,
  "NightMode": 100,
  "HeroBanner": 80,
  "Projects": 20,
  "Skill": 0,
  "Info": 50,
  "Layout": 20,
  "Optimization": 0,
  "SEO": 0
};

// 計算總體進度（根據各功能進度的平均值）
const totalProgress = (Object.values(featureData).reduce((a, b) => a + b, 0)) / Object.keys(featureData).length;

// 圓餅圖：顯示總體進度
const totalProgressChart = new Chart(ctxTotal, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Incomplete'],
    datasets: [{
      data: [totalProgress, 100 - totalProgress],
      backgroundColor: ['rgba(76, 175, 80, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(76, 175, 80, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.raw.toFixed(2) + '%'; // 顯示百分比
          }
        }
      }
    }
  }
});

// 長條圖：顯示每個功能的進度
const featureProgressChart = new Chart(ctxFeature, {
  type: 'bar',
  data: {
    labels: Object.keys(featureData), // 功能名稱
    datasets: [{
      label: '進度 (%)',
      data: Object.values(featureData), // 每個功能的進度
      backgroundColor: Object.values(featureData).map(progress => {
        if (progress <= 50) return 'rgba(255, 99, 132, 0.6)'; // 紅色
        if (progress <= 80) return 'rgba(255, 159, 64, 0.6)'; // 黃色
        return 'rgba(76, 175, 80, 0.6)'; // 綠色
      }),
      borderColor: Object.values(featureData).map(progress => {
        if (progress <= 50) return 'rgba(255, 99, 132, 1)';
        if (progress <= 80) return 'rgba(255, 159, 64, 1)';
        return 'rgba(76, 175, 80, 1)';
      }),
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      legend: {
        display: false // 不顯示圖例
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.raw + '%'; // 顯示百分比
          }
        }
      }
    }
  }
});
