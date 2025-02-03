// 數字增長動畫
function animateNumber(id, targetValue) {
  const element = document.getElementById(id)
  let currentValue = 0
  const duration = 2000 // 動畫持續時間 (毫秒)
  const increment = targetValue / (duration / 50) // 每次增長的數值

  const interval = setInterval(() => {
    currentValue += increment
    if (currentValue >= targetValue) {
      element.textContent = targetValue.toLocaleString() // 確保數字達到目標值並格式化
      clearInterval(interval) // 停止計時器
    } else {
      element.textContent = Math.floor(currentValue).toLocaleString() // 更新顯示的數字並格式化
    }
  }, 50)
}

// 在頁面加載後執行數字動畫
window.addEventListener("load", () => {
  animateNumber("count-1", 50)
  animateNumber("count-2", 100)
  animateNumber("count-3", 100)
  animateNumber("count-4", 80)
  animateNumber("count-5", 20)
  animateNumber("count-6", 0)
  animateNumber("count-7", 50)
  animateNumber("count-8", 20)
  animateNumber("count-9", 0)
  animateNumber("count-10", 0)
})

// 滾動時顯示動畫
function handleScroll() {
  const elements = document.querySelectorAll(".data-card, .cta-section")
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    if (rect.top <= windowHeight * 0.75) {
      el.classList.add("animate")
    }
  })
}

window.addEventListener("scroll", handleScroll)
handleScroll() // 初始檢查

