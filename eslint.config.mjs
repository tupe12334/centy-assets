import publishablePackageJson from 'eslint-config-publishable-package-json'
import jsoncParser from 'jsonc-eslint-parser'

export default [
  {
    files: ['package.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    ...publishablePackageJson,
  },
  {
    ignores: ['node_modules/**'],
  },
]
