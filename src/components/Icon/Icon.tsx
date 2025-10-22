import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import colors from '@DevEx/utils/styles/palette/colors';
import theme from '@DevEx/utils/styles/theme';
import { IconsProps, IconState } from '@DevEx/utils/types/types';

const ThemedIcon: FC<IconsProps> = ({
  icon: Icon,
  size = 15,
  state = 'default',
  testId,
  viewStyle,
  color,
}) => {
  const IconColors: { [key in IconState]: string } = {
    default: theme.colors.grey70,
    selected: colors.primaryBlue,
    positive: theme.colors.positive,
    negative: theme.colors.negative,
    activeTab: theme.colors.activeTab,
    inactiveTab: theme.colors.inactiveTab,
    error: theme.colors.errorDark,
    xMark: theme.colors.grey50,
  };

  if (typeof Icon === 'function') {
    return (
      <Icon
        color={IconColors[state]}
        size={size}
        testID={testId}
        viewStyle={viewStyle}
      />
    );
  }

  return (
    <FontAwesomeIcon
      size={size}
      icon={Icon}
      style={viewStyle || undefined}
      testID={testId}
      color={color ?? IconColors[state]}
    />
  );
};

interface TappableIconProps extends IconsProps {
  onPress: () => void;
}

export const TappableIcon: FC<TappableIconProps> = ({
  onPress,
  ...iconProps
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedIcon {...iconProps} />
    </TouchableOpacity>
  );
};

export default ThemedIcon;
