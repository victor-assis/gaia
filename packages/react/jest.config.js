const mainConfig = require('../../jest.config')

module.exports = {
  ...mainConfig,
  rootDir: './',
  displayName: 'react',
  projects: ['./src/**/*'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/react',
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    "!src/index.ts"
  ]
};
