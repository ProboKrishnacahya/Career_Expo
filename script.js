document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    });
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
});