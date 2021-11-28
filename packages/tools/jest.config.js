const mainConfig = require('../../jest.config')

module.exports = {
  ...mainConfig,
  rootDir: './',
  displayName: 'tools',  
  projects: ['./'],
  coverageDirectory: '../../coverage/tools',
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    "!src/index.ts"
  ]
}
