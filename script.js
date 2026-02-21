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
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.getElementById("heroText");
    const ctaGroup = document.getElementById("cta-group");
    const seeMoreBtn = document.getElementById("cta-button");
    const aboutBtn = document.getElementById("about-button");

    const line1 = "Turning Complex Challenges into Simple";
    const line2 = "Elegant Experiences";
    let charIndex = 0;

    // 放入透明佔位，讓光標在左側
    if (heroText) {
        heroText.innerHTML = `<span class="cursor"></span><span class="ghost">${line1}</span>`;
    }

    // 等待 2 秒 (CSS動畫處理閃爍)
    setTimeout(() => {
        if (heroText) typeLine1();
    }, 2000);

    function typeLine1() {
        if (charIndex <= line1.length) {
            const typed = line1.substring(0, charIndex);
            const ghost = line1.substring(charIndex);
            heroText.innerHTML = `<span>${typed}</span><span class="cursor"></span><span class="ghost">${ghost}</span>`;
            charIndex++;
            setTimeout(typeLine1, 60);
        } else {
            charIndex = 0;
            // 換行時，先準備好第二行的透明佔位
            heroText.innerHTML = `<span>${line1}</span><br><span class="cursor"></span><span class="ghost">${line2}</span>`;
            setTimeout(typeLine2, 200);
        }
    }

    function typeLine2() {
        if (charIndex <= line2.length) {
            const typed = line2.substring(0, charIndex);
            const ghost = line2.substring(charIndex);
            heroText.innerHTML = `<span>${line1}</span><br><span>${typed}</span><span class="cursor"></span><span class="ghost">${ghost}</span>`;
            charIndex++;
            setTimeout(typeLine2, 60);
        } else {
            finishTyping();
        }
    }

    function finishTyping() {
        // 打完後移除游標與 ghost 標籤，恢復文字展示
        heroText.innerHTML = `<span>${line1}</span><br><span>${line2}</span>`;
        setTimeout(() => {
            if (ctaGroup) ctaGroup.classList.add("show");
        }, 500);
    }

    // Overview 按鈕跳轉
    if (aboutBtn) {
        aboutBtn.addEventListener("click", () => {
            window.location.href = "https://liwei-ji.github.io/about.html";
        });
    }

    // Learn More 平滑捲動
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener("click", () => {
            const nextSection = document.querySelector(".projects-section"); 
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

    // 卡片數據
const cardData = [
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/de20e0220712515.6999e02704179.png",
        title: "Input UX",
        subtitle: "Guides users on how to interact with the AI model.",
        isLarge: true,
        tags: ["AI Agent", "UIUX", "Interactive behavior", "Input"],
        url: "https://liwei-ji.github.io/ai-agent-input",
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45ddd2220712515.695bcbd04ca9a.png",
        title: "DISE AI Agent",
        subtitle: "DISE AI is a medical AI agent combining U-Net based image recognition, LLMs and retrieval augmented generation RAG.",
        tags: ["AI Agent", "Model Training", "LLM", "RAG", ],
        url: "https://liwei-ji.github.io/DISE-AI",
        banner: "Contact me to use"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/464ea3220712515.67c82815e2868.png",
        title: "Review of OSIM Work",
        subtitle: "Creating a connected OSIM health ecosystem through cross product integration and intelligent control, delivering a seamless and personalized full body massage experience.",
        tags: ["English", "UI/UX", "Website", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/review-of-osim-work"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/293901220712515.67c8224364822.png",
        title: "OSIM Well Being App",
        subtitle: "Reflecting on Challenges, Achievements, and Lessons Learned Along the Way.",
        tags: ["English", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/osim-well-being-app"
    },
    {
        imgSrc: "https://sg.osim.com/partners-program/img/servicedonewell-min.jpg",
        title: "How I Helped the CS Team Increase Efficiency",
        subtitle: "From workflow design to prototype validation, crafting tools that accelerate issue resolution and deliver actionable user insights.",
        tags: ["English", "Website", "Research"],
        url: "https://liwei-ji.github.io/projects/osim-onecrm"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e51e2b220712515.67c81f448fc61.png",
        title: "Designing the mmWave Testing Tool GUI",
        subtitle: "Users can perform beam control experiments and verify test results through the intuitive TMXLAB Kit graphical interface.",
        tags: ["English", "Website", "Research"],
        url: "https://liwei-ji.github.io/projects/mmwave"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4659a220712515.67c82775b7f34.png",
        title: "OPTEX Vision App",
        subtitle: "Focused on minimalist design and brand consistency, enhancing operational efficiency and meeting user needs in Japanese and European markets.",
        tags: ["English", "APP", "Research"],
        url: "https://liwei-ji.github.io/projects/optex-app"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d66ace220712515.67c825cfd1d87.png",
        title: "Toyota New RAV4 In Car System",
        subtitle: "Comprehensively optimized in car system interfaces leveraging intuitive design, dynamic information, and feature integration to enhance driving convenience and safety.",
        tags: ["Japanese", "Toyota", "NewRav4", "Research"],
        url: "https://liwei-ji.github.io/projects/toyota-rav4"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6296d220712515.67c8012021a2c.png",
        title: "Toyota New RAV4 In Car App",
        subtitle: "Smart app integrating real time vehicle data and interactive workflows, focused on driver experience and user behavior driven design.",
        tags: ["Japanese", "Toyota", "NewRav4", "Research", "APP"],
        url: "https://liwei-ji.github.io/projects/toyota-app"
    }
];

    // 創建卡片
function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

      // Add Large card
    if (card.isLarge) {
        cardElement.classList.add('card-large');
    }

    cardElement.innerHTML = `
    <div class="image-wrapper">
        <img src="${card.imgSrc}" alt="${card.title}" class="card-image">
         ${card.banner ? `<div class="card-banner">${card.banner}</div>` : ""}
         </div>
         
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            ${card.subtitle ? `<p class="card-subtitle">${card.subtitle}</p>` : ""}
            ${card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
    `;

    cardElement.addEventListener('click', () => {
    // 點擊卡片時開啟指定的 URL
        window.open(card.url, "_self");  // 當前標籤頁中打開
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
