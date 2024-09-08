import { gsap } from "../../src/js/gsap-plugins";

test("GSAP ScrollTrigger plugin should work", () => {
  const element = document.createElement("div");
  element.classList.add("test-element");
  document.body.appendChild(element);
  
  gsap.to(element, {
    x: 100,
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });
  
  expect(element).toBeDefined();
});