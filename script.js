// 獲取切換按鈕的引用
const modeEmoji = document.getElementById('modeEmoji');

// 檢查顏色模式
function checkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 顯示月亮 emoji 並啟用黑暗模式
        modeEmoji.textContent = '🌙';
        document.body.classList.add('dark-mode');
    } else {
        // 顯示太陽 emoji 並啟用白天模式
        modeEmoji.textContent = '🌞';
        document.body.classList.remove('dark-mode');
    }
}

// 監聽顏色方案變更
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkMode);

// 頁面加載時檢查顏色模式
checkMode();

// 用來觸發手動切換模式
modeEmoji.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeEmoji.textContent = '🌙';
    } else {
        modeEmoji.textContent = '🌞';
    }
});
