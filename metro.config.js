const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const path = require('path');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    extraNodeModules: {
      '@generated': path.resolve(__dirname, 'src/api/monolith/__generated__'), // Update this to match actual generated location
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
