module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/components']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 80,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-confusing-arrow': ['off', { allowParents: false }],
    'prefer-arrow-callback': ['warn', { allowUnboundThis: false }],
    'prefer-const': 'error',
  },
};
