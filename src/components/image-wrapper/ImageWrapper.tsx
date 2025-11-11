import React from 'react';
import { Image, ImageProps, View } from 'react-native';

import UserPlaceholder from '@DevEx/assets/Icons/Linear/UserPlaceholder';

const ImageWrapper = ({
  image,
  style,
}: {
  image?: ImageProps | string;
  style: any;
}) => {
  if (!image) {
    return (
      <View style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 25 }}>
        <UserPlaceholder size={50} color="#ccc" />
      </View>
    );
  }

  if (typeof image === 'string') {
    return <Image source={{ uri: image }} style={style} />;
  }

  return <Image source={image} style={style} />;
};

export default ImageWrapper;
