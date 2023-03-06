const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = carousel.querySelectorAll('span');
const itemHeight = carouselContainer.offsetHeight;
let currentItemIndex = 0;

function updateCarousel() {
  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  carousel.style.transform = `translateY(-${currentItemIndex * itemHeight}px)`;
}

setInterval(updateCarousel, 2000);