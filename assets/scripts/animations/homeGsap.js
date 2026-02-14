export function homeAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none nmone'
        }
    });

    tl.from('#home', {
        y: 100,
        opacity: 0,
        duration: 1
    })
}