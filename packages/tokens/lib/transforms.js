const StyleDictionary = require('style-dictionary')
const _ = require('lodash')

const defaultTransforms = ['attribute/cti', 'custom/name/snake', '']

const transforms = [
  {
    name: 'custom/name/snake',
    type: 'name',
    transformer: (token, options) =>
      [options.prefix].concat(token.path).join('_')
  }
]
