const {defaults} = require('jest-config');

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['src'],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  verbose: true,
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1/",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^services(.*)$": "<rootDir>/src/services$1",
    "^store(.*)$": "<rootDir>/src/store$1",
    "^images(.*)$": "<rootDir>/src/images$1",
    // "axios": "axios/dist/node/axios.cjs",
    '\\.(css|less|png)$': '<rootDir>/src/unit-test/__mocks/styleMock.js',
  },
  testEnvironment: 'jsdom',
  
};