export function homeAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    // Desenho svg
    const path = document.querySelector("#animated-path");
    const length = path.getTotalLength();

    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out"
    });

    // Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-wrapper",
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none nmone'
        }
    }); 

    tl.from('#navbar', {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .from('.title-container', {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "expo.out"
        },
            '-=0.6')
        .from('.fotoHero', {
            x: 120,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out"
        },
            '-=0.8')
        .from('.subtitle.hero', {
            x: -20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        },
            '-=1.0')
        .fromTo('.socials-icon', {
            autoAlpha: 0,
            opacity: 0,
            y: 60,
            filter: 'blur(2px)'
        },
            {
                autoAlpha: 1,
                opacity: 1,
                stagger: 0.1,
                y: 0,
                filter: 'blur(0px)',
                ease: 'power3.out'
            },
            '-=0.6')
}