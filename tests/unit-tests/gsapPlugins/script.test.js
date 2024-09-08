import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger, MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);

beforeEach(() => {
  document.body.innerHTML = `
    <svg>
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
  `;
});

test('GSAP should be defined', async () => {
  expect(gsap).toBeDefined();
  await gsap.to("circle", { duration: 1, x: 100 });  // 簡単なアニメーションテスト
});