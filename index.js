module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'sonarjs/no-unused-collection': 'off',
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
    'no-prototype-builtins': 'off',
  },
};