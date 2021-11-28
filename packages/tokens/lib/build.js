const StyleDictionary = require('style-dictionary')
const fs = require('fs-extra')
const path = require('path')
// const _ = require('lodash')

const baseDir = path.join(__dirname, '/./')

const themes = fs
  .readdirSync(`${baseDir}/tokens/themes/`)
  .filter(f =>
    fs.statSync(path.join(`${baseDir}/tokens/themes/`, f)).isDirectory()
  )

const tokensSource = theme => [
  `${baseDir}/tokens/themes/${theme}/**/*.json`,
  `${baseDir}/tokens/foundation/**/*.json`
]

const getConfig = theme => {
  return {
    source: tokensSource(theme),
    platforms: {
      css_scss: {
        prefix: 'houf',
        transformGroup: 'web',
        buildPath: `../../dist/tokens/${theme}/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              selector: `:root[class*="houf-theme-${theme}"]`
            },
            filter: token => token.theme === theme
          },
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            filter: token => token.theme === theme
          },
          {
            destination: '../tokens.scss',
            format: 'scss/variables',
            filter: token => token.theme === theme
          }
        ]
      },
      js: {
        prefix: 'houf',
        transformGroup: 'js',
        buildPath: `../../dist/tokens/${theme}/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
            filter: token => token.theme === theme
          },
          {
            destination: 'tokens.d.ts',
            format: 'typescript/es6-declarations',
            filter: token => token.theme === theme
          }
        ]
      },
      json: {
        prefix: 'houf',
        // transformGroup: 'customJson',
        buildPath: `../../dist/tokens/${theme}/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
            filter: token => token.theme === theme
          }
        ]
      }
    }
  }
}

themes.map(theme => {
  const sd = StyleDictionary.extend(getConfig(theme))

  console.log('\n==============================================')
  console.log(`\nProcessing Theme: ${theme}`)

  sd.buildAllPlatforms()

  console.log('\nEnd processing')
})

console.log('\n==============================================')
console.log('\nBuild completed!')
