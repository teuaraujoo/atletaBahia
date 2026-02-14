import { playVideo } from "./animations/videoModal.js";
import { homeAnimate } from "./animations/homeGsap.js";

document.addEventListener('DOMContentLoaded', () => {
    homeAnimate();
    playVideo();
})