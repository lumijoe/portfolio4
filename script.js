
//　ハンバーガーメニュー3本線、ナビパネルの状態（クリック時の処理）
const navMenu       = document.getElementById('navmenu');
const navLineFirst  = document.getElementById('navlinefirst');
const navLineSecond = document.getElementById('navlinesecond');
const navLineThird  = document.getElementById('navlinethird');
const navPanel      = document.getElementById('navpanel');

navMenu.addEventListener('click', function(){
    navLineFirst.classList.toggle('linedownright');
    navLineSecond.classList.toggle('hidden');
    navLineThird.classList.toggle('lineupright');
    navPanel.classList.toggle('isactive');
});

// スクロール
const scrollContainer = document.getElementById('scroll-container');
const scrollContainerImgs = document.getElementById('scroll-container-imgs');

let scrollPosition = 0;
const slideWidth = 300;
const autoSlideInterval = 2000;

function startAutoSlide () {
    setInterval(()=> {
        scrollPosition += slideWidth;
        if (scrollPosition >= scrollContainerImgs.scrollWidth) {
            scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
    }, autoSlideInterval);
}

startAutoSlide();

//　ワークスカテゴリ
const allBtn = document.getElementById('all');
const webBtn = document.getElementById('web');
const graphicBtn = document.getElementById('graphic');
const contentsBtn = document.getElementById('contents');

const webItems = document.querySelectorAll('.web');
const graphicItems = document.querySelectorAll('.graphic');
const contentsItems = document.querySelectorAll('.contents');

webBtn.addEventListener('click', function(){
    webItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
    graphicItems.forEach(function(item) {
        item.classList.add('hidden');
    });
    contentsItems.forEach(function(item) {
        item.classList.add('hidden');
    });
});
graphicBtn.addEventListener('click', function(){
    graphicItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
    webItems.forEach(function(item) {
        item.classList.add('hidden');
    });
    contentsItems.forEach(function(item) {
        item.classList.add('hidden');
    });
});
contentsBtn.addEventListener('click', function(){
    contentsItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
    webItems.forEach(function(item) {
        item.classList.add('hidden');
    });
    graphicItems.forEach(function(item) {
        item.classList.add('hidden');
    });
});
allBtn.addEventListener('click', function(){
    webItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
    graphicItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
    contentsItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
})


