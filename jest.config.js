module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testEnvironmentOptions: {
    "url": "http://localhost/"
  },
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },
};
