module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@DevEx': './src',
          '@generated': './src/api/monolith/__generated__',
        },
      },
    ],
  ],
};
