// 啟用捲動動畫
document.body.classList.add('js-animate');

// 模式切換
const modeToggle = document.getElementById('modeToggle');

// 檢查顏色模式
function checkMode() {
    if (modeToggle.checked) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('colorMode', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('colorMode', 'dark');
    }
}

// 頁面加載時從 localStorage 恢復模式
if (localStorage.getItem('colorMode') === 'light') {
    modeToggle.checked = true;
}

// 監聽切換事件
modeToggle.addEventListener('change', checkMode);

// 套用初始模式
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
        heroText.innerHTML = `<span class="cursor entrance"></span><span class="ghost">${line1}</span>`;
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
        imgSrc: "images/gmp_ai_cover.webp",
        title: "GMP AI Agent",
        subtitle: "Interprets FDA, EMA, and ICH regulations to help R&D and regulatory teams quickly identify compliance pathways, supported by built-in risk prediction models for proactive quality management.",
        tags: ["AI Agent", "LLM", "RAG",],
        url: "https://github.com/Liwei-Ji/GMP-AI-Agent",
        banner: "Contact me to use"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/de20e0220712515.6999e02704179.png",
        title: "Input UX",
        subtitle: "Guides users on how to interact with the AI model.",
        isLarge: true,
        tags: ["AI Agent", "UIUX", "Interactive behavior", "Input"],
        url: "https://liwei-ji.github.io/ai-agent-input",
        banner: "Contact me to use"
    },
    {
        imgSrc: "projects/dise-ai/cover.webp",
        title: "DISE AI",
        subtitle: "Simplifying DISE video evaluation with real-time AI insights.",
        tags: ["AI Agent", "UIUX"],
        url: "projects/dise-ai/",
    },
    {
        imgSrc: "images/dise_ai_cover.webp",
        title: "DISE AI Agent",
        subtitle: "DISE AI is a medical AI agent combining U-Net based image recognition, LLMs and retrieval augmented generation RAG.",
        tags: ["AI Agent", "Model Training", "LLM", "RAG",],
        url: "https://liwei-ji.github.io/DISE-AI",
        banner: "Contact me to use"
    },
    {
        imgSrc: "images/agent_flow_studio_cover.webp",
        title: "Agent Flow Studio",
        subtitle: "An AI agent orchestration platform combining visual workflow design, multi-agent coordination, and production-grade deployment.",
        tags: ["AI Agent", "Flow", "LLM", "RAG",],
        url: "https://liwei-ji.github.io/agent-flow-studio/",
        banner: "Contact me to use"
    },
    {
        imgSrc: "projects/review-of-osim-work/cover.webp",
        title: "Review of OSIM Work",
        subtitle: "Reflecting on Challenges, Achievements, and Lessons Learned Along the Way.",
        tags: ["English", "UI/UX", "Website", "APP", "Research"],
        url: "projects/review-of-osim-work/"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/293901220712515.67c8224364822.png",
        title: "OSIM Well Being App",
        subtitle: "Creating a connected OSIM health ecosystem through cross product integration and intelligent control, delivering a seamless and personalized full body massage experience.",
        tags: ["English", "APP", "Research"],
        url: "projects/osim-well-being-app/"
    },
    {
        imgSrc: "projects/osim-onecrm/cover.webp",
        title: "How I Helped the CS Team Increase Efficiency",
        subtitle: "From workflow design to prototype validation, crafting tools that accelerate issue resolution and deliver actionable user insights.",
        tags: ["English", "Website", "Research"],
        url: "projects/osim-onecrm/"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e51e2b220712515.67c81f448fc61.png",
        title: "Designing the mmWave Testing Tool GUI",
        subtitle: "Users can perform beam control experiments and verify test results through the intuitive TMXLAB Kit graphical interface.",
        tags: ["English", "Website", "Research"],
        url: "projects/mmwave/"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4659a220712515.67c82775b7f34.png",
        title: "OPTEX Vision App",
        subtitle: "Focused on minimalist design and brand consistency, enhancing operational efficiency and meeting user needs in Japanese and European markets.",
        tags: ["English", "APP", "Research"],
        url: "projects/optex-app/"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f5fbe220712515.69b2cc7c19b28.png",
        title: "Toyota New RAV4 In Car System",
        subtitle: "Comprehensively optimized in car system interfaces leveraging intuitive design, dynamic information, and feature integration to enhance driving convenience and safety.",
        tags: ["Japanese", "Toyota", "NewRav4", "Research"],
        url: "projects/toyota-rav4/"
    },
    {
        imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6296d220712515.67c8012021a2c.png",
        title: "Toyota New RAV4 In Car App",
        subtitle: "Smart app integrating real time vehicle data and interactive workflows, focused on driver experience and user behavior driven design.",
        tags: ["Japanese", "Toyota", "NewRav4", "Research", "APP"],
        url: "projects/toyota-app/"
    }
];

// 文章數據
const writingData = [
    {
        url: "https://medium.com/@jpw0616/openai-didnt-just-release-gpt-rosalind-it-changed-the-battlefield-a7bae74ac719",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eeGNuYOK5TiWYRoyfYh0RA.png",
        title: "OpenAI Didn’t Just Release GPT Rosalind. It Changed the Battlefield.",
        desc: "While the world is still distracted by the AGI narrative and the chatbot arms race, OpenAI quietly did something far more consequential: it released GPT Rosalind.",
        date: "Jun 7, 2026",
        target: "_blank"
    },
    {
        url: "https://medium.com/@jpw0616/the-endgame-of-medical-ai-f9465f16e6f5",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dF3hOw3gGJ8XRAEONFFVMA.jpeg",
        title: "When Medical AI Is Right But No One Understands Why",
        desc: "What happens when correctness exceeds human comprehension?",
        date: "Jun 5, 2026",
        target: "_blank"
    },
    {
        url: "https://medium.com/@jpw0616/where-are-ui-ux-designers-headed-in-2026-403d2d70b259",
        imgSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*1L_mpreZRrfuaoQcWrOZuA.jpeg",
        title: "Where Are UI/UX Designers Headed in 2026?",
        desc: "The floor dropped. The ceiling is moving. An honest midyear look at where designers actually stand.",
        date: "Jun 2, 2026",
        target: "_blank"
    },
    {
        url: "https://medium.com/@jpw0616/is-ux-skills-for-business-strategy-worth-reading-40cdfbac0315",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JMIBVNwywgkUghJisvAMOg.png",
        title: "Is UX Skills for Business Strategy Worth Reading?",
        desc: "How UX designers can reframe their skills as strategic tools aligned with organizational goals.",
        date: "May 10, 2026",
        target: "_blank"
    },
    {
        url: "https://liwei-ji.github.io/relaunch/",
        imgSrc: "https://images.unsplash.com/photo-1729710877235-28d1e82d0442?q=80&w=800&auto=format&fit=crop",
        title: "The Journey to Rebuild My Portfolio",
        desc: "Why I stopped using Behance and Notion and built this portfolio from scratch.",
        date: "Mar 2025"
    },
    {
        url: "https://medium.com/@jpw0616/a-coffee-is-all-it-takes-to-level-up-cbe5f6e4941f",
        imgSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*uwZJcOAsuXZl40ZidloBVw.jpeg",
        title: "A Coffee is All It Takes to Level Up",
        desc: "Why real conversations matter more than any course, article, or tutorial you'll ever consume.",
        date: "Mar 24, 2025",
        target: "_blank"
    },
    {
        url: "https://medium.com/@jpw0616/ux-for-business-designing-a-valuable-digital-company-02e279fa9fbd",
        imgSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4Zlw-dG2QM3Dk8xmDDIXIA.png",
        title: "Is UX for Business worth reading?",
        desc: "Before reading this book I thought UX was about meeting user needs. Joel Marsh's take completely changed my perspective.",
        date: "Dec 27, 2024",
        target: "_blank"
    },
    {
        url: "https://medium.com/@jpw0616/where-are-ui-ux-designers-headed-in-2025-e0628c15060d",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GypnKm9nUvBookhOSEyDLg.jpeg",
        title: "Where Are UI/UX Designers Headed in 2025?",
        desc: "From UI/UX to Business Design how AI is restructuring roles and redefining what designer value actually means.",
        date: "Dec 25, 2024",
        target: "_blank"
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

// 動態渲染文章卡片
function renderWritings() {
    const writingGrid = document.getElementById('writing-grid');
    if (!writingGrid) return;

    writingData.forEach(post => {
        const postElement = document.createElement('a');
        postElement.href = post.url;
        if (post.target) {
            postElement.target = post.target;
        }
        postElement.classList.add('writing-card');

        postElement.innerHTML = `
            <div class="writing-card-img">
                <img src="${post.imgSrc}" alt="${post.title}">
            </div>
            <div class="writing-card-body">
                <h3 class="writing-card-title">${post.title}</h3>
                <p class="writing-card-desc">${post.desc}</p>
                <span class="writing-card-date">${post.date}</span>
            </div>
        `;
        writingGrid.appendChild(postElement);
    });
}

// 捲動進場動畫
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        visible.forEach((entry, i) => {
            const delay = i * 100;
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('in-view');
            setTimeout(() => {
                entry.target.style.transitionDelay = '';
            }, 550 + delay);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.card, .skill-card, .writing-card').forEach(el => {
        observer.observe(el);
    });
}

// 初始化卡片容器
const cardContainer = document.getElementById('card-container');
cardData.forEach(card => {
    cardContainer.appendChild(createCard(card));
});

// 渲染文章
renderWritings();

// 啟動滾動動畫
setupScrollAnimations();

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
