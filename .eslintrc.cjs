module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  globals: {
    it: 'readonly',
    expect: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./jsconfig.json'],
  },
  extends: [
    'plugin:jsdoc/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'jsdoc/require-param-description': 0,
    'jsdoc/require-property-description': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-param-type': 1,
    'jsdoc/no-undefined-types': 0,
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'typescript-eslint/await-thenable': 'off',
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        '*': false,
      },
    },
  },
}
