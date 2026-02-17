export function headerOnScroll() {
    const header = document.querySelector('header');

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: ".hero-wrapper",
        start: "top top",
        end: "bottom top",
        onEnter: () => header.classList.add("scrolled"),
        onLeaveBack: () => header.classList.remove("scrolled")
    });
}
