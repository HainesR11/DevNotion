import React from 'react';
import { View } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import theme from '@DevEx/utils/styles/theme';

const Breaker = () => {
  return (
    <View
      style={{
        width: '100%',
        height: theme.spacing.xxs,
        backgroundColor: colors.grey10,
      }}
    />
  );
};

export default Breaker;
