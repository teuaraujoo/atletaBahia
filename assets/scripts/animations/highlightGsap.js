export function highlightAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#highlight",
            start: 'top 70%', 
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('.video-highlight-container', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .from('.title-container.highlight .title.up', {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.title-container.highlight .title.down', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');
}
