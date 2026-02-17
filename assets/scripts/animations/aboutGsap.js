export function aboutAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('#about img', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    })
        .from('.title.about', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.subtitle.about', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.about-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.stats', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, '-=0.5')
}
