const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    tsConfig: '<rootDir>/projects/lib/tsconfig.spec.json',
  },
};
