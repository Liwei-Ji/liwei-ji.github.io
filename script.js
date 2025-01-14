// 獲取切換按鈕的引用
const modeEmoji = document.getElementById('modeEmoji');

// 檢查顏色模式
function checkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 顯示月亮 emoji 並啟用黑暗模式
        modeEmoji.textContent = '🌙';
        document.body.classList.add('dark-mode');
    } else {
        // 顯示太陽 emoji 並啟用光亮模式
        modeEmoji.textContent = '🌞';
        document.body.classList.remove('dark-mode');
    }
}

// 監聽顏色方案變更
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkMode);

// 頁面加載時檢查顏色模式
checkMode();

// 手動切換模式
modeEmoji.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // 切換 dark-mode
      // 設置正確的 emoji 圖示
  if (document.body.classList.contains('dark-mode')) {
    modeEmoji.textContent = '🌙';
  } else {
    modeEmoji.textContent = '🌞';
  }
});

// 卡片數據
const cardData = [
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "標題 1",
        tags: ["標籤", "標籤"],
        content: "文章內容 1"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "標題 2",
        tags: ["標籤", "標籤"],
        content: "文章內容 2"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "標題 3",
        tags: ["標籤", "標籤"],
        content: "文章內容 3"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "標題 4",
        tags: ["標籤", "標籤"],
        content: "文章內容 4"
    }
];

// 取得卡片容器
const cardContainer = document.getElementById('card-container');


// 創建虛線卡片
function createDashedCard() {
  const dashedCard = document.createElement('div');
  dashedCard.classList.add('dashed-card');
    dashedCard.textContent = 'A new update is coming soon...'; // 根據需要修改文字
  cardContainer.appendChild(dashedCard);
}

// 創建卡片元素
function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
        <img src="${card.imgSrc}" alt="Card Image" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            ${card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>`;

  // 為每張卡片設置點擊事件，觸發彈出內頁
  cardElement.addEventListener('click', () => {
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');

    // 設置彈出內頁的標題和內容
    popupTitle.textContent = card.title;
    popupContent.textContent = card.content;

    // 顯示彈出內頁
    document.getElementById('popup').classList.add('show');
  });

  return cardElement;
}

// 迭代數據並生成卡片
cardData.forEach((card) => {
   const cardElement = createCard(card);
   cardContainer.appendChild(cardElement);
});


// 創建虛線卡片
createDashedCard();


// 彈出內頁關閉事件
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('show');
});
