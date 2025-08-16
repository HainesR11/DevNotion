import React, { FC } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { IconProps } from '@DevEx/utils/types/types';

import Icon from '../Icon/Icon';
import { Text } from '../Text/text';

import createStyles from './NotificationIcon.styles';

type TNotificationIconProps = {
  type?: 'Primary' | 'Numbered' | 'TabBar';
  count: number;
  icon: IconDefinition | FC<IconProps>;
  onPress?: () => void;
  testId?: string;
  size?: number;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  state?:
    | 'default'
    | 'selected'
    | 'positive'
    | 'negative'
    | 'activeTab'
    | 'inactiveTab'
    | 'error';
};

const NotificationIcon = ({
  type = 'Primary',
  testId,
  count,
  icon,
  onPress,
  size,
  containerStyle,
  iconStyle,
  dotStyle,
  state,
}: TNotificationIconProps) => {
  const style = useThemedStyles(createStyles);

  switch (true) {
    case !onPress:
      return (
        <View testID={testId} style={containerStyle}>
          {count > 0 && <View style={[style.notificationDot, dotStyle]} />}
          <Icon Icon={icon} viewStyle={iconStyle} size={size} state={state} />
        </View>
      );

    case type === 'Numbered' && !!onPress:
      return (
        <TouchableOpacity
          testID={testId}
          onPress={onPress}
          style={containerStyle}
        >
          {count > 0 && (
            <View style={[style.notificationNumberedDot, dotStyle]}>
              <Text textStyle={style.numberText} size={10} bold text={count} />
            </View>
          )}
          <Icon Icon={icon} viewStyle={iconStyle} size={size} state={state} />
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          activeOpacity={1}
          testID={testId}
          onPress={onPress}
          style={containerStyle}
        >
          <View>
            {count > 0 && <View style={[style.notificationDot, dotStyle]} />}
            <Icon Icon={icon} viewStyle={iconStyle} size={size} state={state} />
          </View>
        </TouchableOpacity>
      );
  }
};

export default NotificationIcon;
