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

    // 打字機效果
const textElement = document.getElementById("heroText");
const words = ["Hi I'm Liwei Ji", "I'm UIUX Designer", "Frontend Developer", "Creating Engaging Experiences", "Turning Ideas into Solutions"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentWord.substring(0, charIndex);

    let typingSpeed = isDeleting ? 50 : 100; // 刪除速度
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // 完整顯示後暫停
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // 切換到下一句時的暫停
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
    // 卡片數據
const cardData = [
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/464ea3220712515.67c82815e2868.png",
        title: "Review of OSIM Work",
        tags: ["English", "UI/UX", "Website", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/review-of-osim-work"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/293901220712515.67c8224364822.png",
        title: "OSIM Well Being App",
        tags: ["English", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/osim-well-being-app"
    },
    {
        imgSrc: "https://liwei-ji.github.io/picture.jpg",
        title: "How I Helped the CS Team Increase Efficiency",
        tags: ["English", "Website", "Research"],
        url: "https://liwei-ji.github.io/projects/osim-onecrm"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e51e2b220712515.67c81f448fc61.png",
        title: "Designing the mmWave Testing Tool GUI",
        tags: ["English", "Website", "Research"],
        url: "https://liwei-ji.github.io/projects/mmwave"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4659a220712515.67c82775b7f34.png",
        title: "OPTEX Vision App",
        tags: ["English", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/optex-app"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d66ace220712515.67c825cfd1d87.png",
        title: "Toyota New RAV4 In Car System",
        tags: ["Japanese", "Toyota", "NewRav4", "Research"],
        url: "https://liwei-ji.github.io/projects/toyota-rav4"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6296d220712515.67c8012021a2c.png",
        title: "Toyota New RAV4 In Car App",
        tags: ["Japanese", "Toyota", "NewRav4", "Research", "APP"],
        url: "https://liwei-ji.github.io/projects/toyota-app"
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
