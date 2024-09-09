import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger, MorphSVGPlugin } from "gsap/all";

global.gsap = gsap;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);