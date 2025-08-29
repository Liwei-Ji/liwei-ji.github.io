    // 卡片數據
const cardData = [
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e78c4220712515.68b163c7bc2a1.jpg",
        title: "Flashcard Game",
        tags: ["",],
        url: "https://liwei-ji.github.io/labs/vocab-trainer/"
    },
     {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27592f220712515.68b173e00fa59.jpg",
        title: "Neo Space Shoote",
        tags: ["",],
        url: "https://liwei-ji.github.io/game"
    },

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
