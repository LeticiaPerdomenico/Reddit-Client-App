module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassign': 'off',
  },
};
