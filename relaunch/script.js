// 淡入效果
document.addEventListener("DOMContentLoaded", function() {
  // 選取所有需要淡入的元素
  const faders = document.querySelectorAll('.fade-in');

  // 設定觀察器：當元素有 20% 進入視窗時觸發
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  // 建立 IntersectionObserver
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 若只希望觸發一次則取消觀察
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  // 對每個元素進行監控
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


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
      backgroundColor: ['rgba(76, 175, 80, 0.6)', 'rgba(200, 200, 200, 0.6)'],
      borderColor: ['rgba(76, 175, 80, 1)', 'rgba(200, 200, 200, 1)'], 
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
      data: Object.values(featureData), // 每個的進度
      backgroundColor: Object.values(featureData).map(progress => {
        if (progress <= 50) return 'rgba(200, 200, 200, 0.6)'; // 深灰
        if (progress <= 80) return 'rgba(255, 159, 64, 0.6)'; // 黃
        return 'rgba(76, 175, 80, 0.6)'; // 綠
      }),
      borderColor: Object.values(featureData).map(progress => {
        if (progress <= 50) return 'rgba(200, 200, 200, 1)'; // 深灰
        if (progress <= 80) return 'rgba(255, 159, 64, 1)'; // 橙
        return 'rgba(76, 175, 80, 1)'; // 綠
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
