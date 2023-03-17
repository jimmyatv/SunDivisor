//! Manual image slider

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
});




//? Back to top and fixed navBar

const toTop = document.querySelector('.to-top');
const headerNav = document.querySelector('.headerNav');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');



burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});




window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }

  headerNav.classList.toggle('sticky', window.scrollY > 0);   // fixed navBar


});

