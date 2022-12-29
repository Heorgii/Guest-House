const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', openModal);
closeMenuBtn.addEventListener('click', closeModal);

function openModal() {
    mobileMenu.classList.remove('is-hidden');
    mobileMenu.classList.add('is-open');
}

function closeModal() {
    mobileMenu.classList.add('is-hidden');
    mobileMenu.classList.remove('is-open');
}