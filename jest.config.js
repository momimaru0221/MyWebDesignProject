module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!(gsap)/)"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};