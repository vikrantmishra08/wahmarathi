
document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    function startAutoSlider() {
        refreshInterval = setInterval(() => {
            next.click();
        }, 6000);
    }

    function stopAutoSlider() {
        clearInterval(refreshInterval);
    }

    function showSlider() {
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
        stopAutoSlider();
        startAutoSlider();
    }

    next.onclick = function () {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    };

    prev.onclick = function () {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    startAutoSlider();
});
