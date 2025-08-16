module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` first, then packages starting with a character
              ['^react$', '^[a-z]', '^@'],
              // Packages starting with `@generated` or `@msa`
              ['^@generated', '^@DevEx'],
              // Imports starting with `./` and `../`
              [
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\.(?!/?$)',
                '^\\./(?=.*/)(?!/?$)',
                '^\\./?$',
              ],
              // Style imports
              ['^.+\\.s?css$', '^.+\\.styles'],
              // Side effect imports - 'import "./setup"'
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
