import React from 'react';
import { Image, ImageProps, ImageStyle, View } from 'react-native';

import UserPlaceholder from '@DevEx/assets/Icons/Linear/UserPlaceholder';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { IconState } from '@DevEx/utils/types/types';

import Icon from '../Icon/Icon';

import createStyles from './UserIconWrapper.styles';

const UserIconWrapper = ({
  image,
  imageStyle,
  styleType = 'individual',
  state = 'default',
}: {
  image?: ImageProps | string;
  imageStyle?: ImageStyle;
  styleType?: 'navigator' | 'individual';
  state?: IconState;
}) => {
  const styles = useThemedStyles(createStyles);

  const getCustomStyles = () => {
    switch (true) {
      case styleType === 'navigator' && !!image:
        return styles.tabImage;
      case styleType !== 'navigator':
        return styles.placeholderContainer;
    }
  };

  if (!image) {
    return (
      <View style={[getCustomStyles()]}>
        <Icon icon={UserPlaceholder} size={50} state={state} />
      </View>
    );
  }

  if (typeof image === 'string') {
    return (
      <Image source={{ uri: image }} style={[getCustomStyles(), imageStyle]} />
    );
  }

  return <Image source={image} style={[getCustomStyles(), imageStyle]} />;
};

export default UserIconWrapper;
