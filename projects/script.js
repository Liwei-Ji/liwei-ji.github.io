        // 監聽滾動事件
        window.addEventListener('scroll', function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var docHeight = document.documentElement.scrollHeight;
            var winHeight = window.innerHeight;

            var scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100;

        // 更新進度條寬度
            document.querySelector('#progress-bar::before').style.width = scrollPercentage + '%';
        });

