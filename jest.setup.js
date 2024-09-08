// jest.setup.js
import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger, MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);