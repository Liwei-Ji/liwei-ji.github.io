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

// 專案卡片數據
const cardData = [
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 1",
        tags: ["Tip", "Tip"],
        content: "Essay 1"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 2",
        tags: ["Tip", "Tip"],
        content: "Essay 2"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 3",
        tags: ["Tip", "Tip"],
        content: "Essay 3"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 4",
        tags: ["Tip", "Tip"],
        content: "Essay 4"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "Title 5",
        tags: ["Tip", "Tip"],
        content: "Essay 5"
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
        document.getElementById('popupTitle').textContent = card.title;
        document.getElementById('popupContent').textContent = card.content;
        document.getElementById('popup').classList.add('show');
    });

    return cardElement;
}

// 創建虛線卡片
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

// 彈出視窗關閉功能
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('show');
});

// 點擊遮罩層關閉彈出視窗
document.getElementById('popupOverlay').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('show');
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
