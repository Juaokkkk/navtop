const header = document.querySelector('header')
document.querySelector('.hamburguer-wrapper').onclik = () => header.dataset.active = +~~header.dataset.active
