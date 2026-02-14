import { playVideo } from "./animations/videoModal.js";
import { homeAnimate } from "./animations/homeGsap.js";
import { headerOnScroll } from "./animations/headerOnScroll.js";
import { aboutAnimate } from "./animations/aboutGsap.js";
import { highlightAnimate } from "./animations/highlightGsap.js";
import { galleryAnimate } from "./animations/galleryGsap.js";
import { contactAnimate } from "./animations/contactGsap.js";

document.addEventListener('DOMContentLoaded', () => {
    homeAnimate();
    aboutAnimate();
    highlightAnimate();
    galleryAnimate();
    contactAnimate();
    headerOnScroll();
    playVideo();
})