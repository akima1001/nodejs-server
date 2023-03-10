module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'jest'],
  ignorePatterns: ['/node_modules/', '*.js', '*.yml', '*.json'],
  root: true,
  rules: {
    'prefer-template': 'error',
    'no-empty-interface': 'off',
    'newline-before-return': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/require-top-level-describe': ['error']
  }
}
