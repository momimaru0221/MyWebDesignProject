import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger, MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);

// Box1のアニメーション - ScrollTriggerを使用
gsap.to("#box1", {
  x: 300,
  rotation: 360,
  duration: 3,
  scrollTrigger: {
    trigger: "#box1",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});

// Box2のアニメーション - MorphSVGPluginを使用
gsap.to("#box2", {
  morphSVG: {
    d: "M150 0 L75 200 L225 200 Z"  // 三角形に変形
  },
  duration: 3
});