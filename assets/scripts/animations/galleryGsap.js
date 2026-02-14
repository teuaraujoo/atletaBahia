export function galleryAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#galery",
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('.title.galery', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.subtitle.galery', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
        .from('.parent div', { 
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'sine.out'
        }, '-=0.5');
}
