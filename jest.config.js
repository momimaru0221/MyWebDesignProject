module.exports = {
    testEnvironment: "jsdom",  // jsdom環境でテストを実行
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // テストセットアップファイル
    transform: {
      "^.+\\.js$": "babel-jest"  // Babelを使用してJSファイルをトランスパイル
    }
};