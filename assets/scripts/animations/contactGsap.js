export function contactAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    // Desenho svg
    const path = document.querySelector("#animated-path2");
    const length = path.getTotalLength();

    // Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-wrapper",
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none nmone'
        }
    });

    tl.fromTo(path, {
        strokeDashoffset: length,
        strokeDasharray: length,
    },
        {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power3.out"
        })
        .from(".title.contact", {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, '-=2.7')
        .fromTo('.socials-container', {
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
            '-=2.6')
        .from('.footer-divisor', {
            opacity: 0,
            duration: 1,
            ease: 'sine.out'
        }, '-=2.6') 
        .from('.footer', {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'sine.out'
        }, '-=2.6')
}