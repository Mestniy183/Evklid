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
