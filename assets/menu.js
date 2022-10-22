const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
const navLinkButton = document.querySelectorAll(".nav-link-button");
navLink.forEach(n => n.addEventListener("click", closeMenu));
navLinkButton.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
}
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function showSlides (n){
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n> slides.length )
    {slideIndex=i}
    if (n<1){
        slideIndex = slides.length
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}

