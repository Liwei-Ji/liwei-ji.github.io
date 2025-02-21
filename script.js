// 模式切換
const modeToggle = document.getElementById('modeToggle');

// 檢查顏色模式
function checkMode() {
    if (modeToggle.checked) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
}

// 監聽切換事件
modeToggle.addEventListener('change', checkMode);

// 頁面加載時檢查顏色模式
checkMode();

// 卡片數據
const cardData = [
    {
        imgSrc: "https://toyota.jp/pages/contents/rav4/002_p_001/image/top/feature_03.jpg",
        title: "トヨタ 新型RAV4 車載システム",
        tags: ["日本語", "トヨタ自動車", "NewRav4", "Research"],
        url: "https://liwei-ji.github.io/projects/toyota-rav4"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 2",
        tags: ["Tip", "Tip"],
        url: "https://example.com/project2"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 3",
        tags: ["Tip", "Tip"],
        url: "https://example.com/project2"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 4",
        tags: ["Tip", "Tip"],
        url: "https://example.com/project2"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 5",
        tags: ["Tip", "Tip"],
        url: "https://example.com/project2"
    }
];

// 創建卡片
function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
        <img src="${card.imgSrc}" alt="${card.title}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            ${card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
    `;

    cardElement.addEventListener('click', () => {
        // 點擊卡片時開啟指定的 URL
        window.open(card.url, "_self");  // 在當前標籤頁中打開
    });

    return cardElement;
}

// 虛線卡片
function createDashedCard() {
    const dashedCard = document.createElement('div');
    dashedCard.classList.add('dashed-card');
    dashedCard.textContent = 'A new update is coming soon...';
    return dashedCard;
}

// 初始化卡片容器
const cardContainer = document.getElementById('card-container');
cardData.forEach(card => {
    cardContainer.appendChild(createCard(card));
});
cardContainer.appendChild(createDashedCard());

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
