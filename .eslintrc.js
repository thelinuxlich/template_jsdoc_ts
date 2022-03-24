module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
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
    project: ['./tsconfig.json'],
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
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        '*': false,
      },
    },
  },
}
