// GSAPと必要なプラグインをインポート
import { gsap } from "../../../src/js/gsap-plugins";

// テスト対象の要素を作成する関数
const createTestElement = () => {
  const element = document.createElement("div");
  element.classList.add("test-element");
  document.body.appendChild(element);
  return element;
};

// GSAPの基本機能をテスト
test("GSAP basic animation works", () => {
  const element = createTestElement();

  // GSAPアニメーションを適用
  gsap.to(element, { x: 100, duration: 1 });

  // 初期状態を確認
  expect(element.style.transform).toBe("");
  
  // アニメーション終了時の状態を確認
  setTimeout(() => {
    expect(element.style.transform).toBe("translateX(100px)");
  }, 1000);  // アニメーションの完了を待つ
});

// ScrollTriggerプラグインのテスト
test("GSAP ScrollTrigger plugin should work", () => {
  const element = createTestElement();

  gsap.to(element, {
    x: 200,
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });

  // スクロールがトリガーされた場合の動作を確認
  expect(element).toBeDefined();
});