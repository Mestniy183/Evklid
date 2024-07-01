const navList = document.querySelector('.nav-list');
const btnBurger = document.querySelector('.nav-burger');
btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  navList.classList.toggle('active');
});
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: true,
});

// search
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.header__search');
const closeBtn = document.querySelector('.header__close');
searchBtn.addEventListener('click', () => {
  search.classList.add('open');
  searchBtn.classList.add('open');
  closeBtn.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  search.classList.remove('open');
  searchBtn.classList.remove('open');
  closeBtn.classList.remove('open');
  document.getElementById('input').value = '';
});

//tabs
const tabsBtn = document.querySelectorAll('.work__btn');
const tabsContent = document.querySelectorAll('.tab__content');

tabsBtn.forEach(onTabClick);
function onTabClick(btn) {
  btn.addEventListener('click', () => {
    let tabId = btn.getAttribute('data-tab');
    let contentId = document.querySelector(tabId);

    if (!btn.classList.contains('active')) {
      tabsBtn.forEach((item) => {
        item.classList.remove('active');
      });
      tabsContent.forEach((item) => {
        item.classList.remove('active');
      });
      btn.classList.add('active');
      contentId.classList.add('active');
    }
  });
}
document.querySelector('.work__btn').click();

const accordion = document.querySelectorAll('[data-quest]');
accordion.forEach(function (question) {
  question.addEventListener('click', function () {
    question.classList.toggle('active');
  });
});
