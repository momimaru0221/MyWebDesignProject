gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);

const circle = document.querySelector('svg circle');
const rectanglePath = 'M50,50 h100 v50 h-100 v-50';

function morphCircleToRectangle() {
    gsap.to(circle, {
        morphSVG: rectanglePath,
        duration: 1,
        ease: 'power2.inOut'
    });
}

morphCircleToRectangle();