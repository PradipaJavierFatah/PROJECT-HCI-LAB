// Navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => { 
    menuList.classList.toggle("hidden");
})

//Other Event VC
let slideIn = 1;
showSlide(slideIn);

// Next/previous controls
function plusSlide(n) {
    showSlide(slideIn += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlide(slideIn = n);
}

function showSlide(n) {
    let i;
    let slide = document.getElementsByClassName("mySlide");
    if (n > slide.length) {slideIn = 1}
    if (n < 1) {slideIn = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideIn-1].style.display = "flex";
}