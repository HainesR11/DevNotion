import React, { FC } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import XMark from '@DevEx/assets/Icons/Linear/XMark';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { IconProps } from '@DevEx/utils/types/types';

import { default as Icon } from '../Icon/Icon';
import { Text } from './text';

import createStyles from './IconText.styles';

interface IconTextProps {
  testId: string;
  icon: FC<IconProps> | IconDefinition;
  text: string;
  iconSize?: number;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  enableRemove?: boolean;
  onRemove?: () => void;
}

const SearchIconText: FC<IconTextProps> = ({
  icon,
  testId,
  text,
  style,
  iconSize,
  textStyle,
  onPress,
  enableRemove,
  onRemove,
}) => {
  const styles = useThemedStyles(createStyles);

  return ( 
    <TouchableOpacity
      testID={testId}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={styles.icon}>
        <Icon Icon={icon} size={iconSize} />
      </View>
      <Text text={text} textStyle={[styles.text, textStyle]} />
      {enableRemove && (
        <TouchableOpacity onPress={onRemove}>
          <Icon Icon={XMark} size={iconSize} state="xMark" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
export default SearchIconText;
