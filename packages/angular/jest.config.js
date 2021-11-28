const mainConfig = require('../../jest.config')

module.exports = {
  ...mainConfig,
  rootDir: './',
  displayName: 'angular',
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js|mjs|html|svg)$': 'jest-preset-angular'
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageDirectory: '../../coverage/angular',
  collectCoverageFrom: [
    "./projects/lib/src/lib/**/*.{js,jsx,ts,tsx}"
  ]
};
