import { playVideo } from "./animations/videoModal.js";
import { homeAnimate } from "./animations/homeGsap.js";
import { headerOnScroll } from "./animations/headerOnScroll.js";
import { aboutAnimate } from "./animations/aboutGsap.js";
import { highlightAnimate } from "./animations/highlightGsap.js";
import { galleryAnimate } from "./animations/galleryGsap.js";
import { contactAnimate } from "./animations/contactGsap.js";
import { scrollSmooth } from "./animations/scrollSmooth.js";

document.addEventListener('DOMContentLoaded', () => {
    homeAnimate();
    scrollSmooth();
    headerOnScroll();
    aboutAnimate();
    highlightAnimate();
    playVideo();
    galleryAnimate();
    contactAnimate();
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".navbar a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });
});

