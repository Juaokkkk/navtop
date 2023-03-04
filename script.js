const navList = document.querySelector('.nav-list');

document.querySelector('.mobile-menu').onclick = () => navList.dataset.show = +!~~navList.dataset.show
