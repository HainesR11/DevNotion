import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@DevEx/utils/types/types';

const UserPlaceholder: FC<IconProps> = ({ size, color, testID }) => {
  return (
    <Svg width={size} height={size} testID={testID} viewBox="0 0 3000 3000">
      <Path
        fill-rule="evenodd"
        fill={color}
        fill-opacity="1"
        d="M 1146 1136.25 C 1146 940.738281 1304.488281 782.25 1500 782.25 C 1695.511719 782.25 1854 940.738281 1854 1136.25 C 1854 1331.761719 1695.511719 1490.25 1500 1490.25 C 1304.488281 1490.25 1146 1331.761719 1146 1136.25 Z M 1146 1136.25 "
      />
      <Path
        fill-rule="evenodd"
        fill={color}
        fill-opacity="1"
        d="M 1500 1621.5 C 1937 1621.5 2291.25 1888.449219 2291.25 2217.75 L 708.75 2217.75 C 708.75 1888.449219 1063 1621.5 1500 1621.5 Z M 1500 1621.5 "
      />
    </Svg>
  );
};

export default UserPlaceholder;
