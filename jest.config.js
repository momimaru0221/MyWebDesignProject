module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
  "/node_modules/(?!(gsap)/)"  // gsapモジュールをトランスパイル対象に含める
  ],
  transform: {
  "^.+\\.js$": "babel-jest"  // Babelを使用してJSファイルをトランスパイル
  }
};