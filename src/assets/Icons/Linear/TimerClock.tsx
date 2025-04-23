import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from '@DevEx/utils/types/types';

const TimerClock: FC<IconProps> = ({size, color, testID, viewStyle}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    testID={testID}
    style={viewStyle}>
    <Path
      d="M16,0 C24.836,0 32,7.164 32,16 C32,24.836 24.836,32 16,32 C7.164,32 0,24.836 0,16 C0,7.164 7.164,0 16,0 Z M16,2 C8.28,2 2,8.28 2,16 C2,23.72 8.28,30 16,30 C23.72,30 30,23.72 30,16 C30,8.28 23.72,2 16,2 Z M15,5.9509 C15,4.7429 16.314,4.9849 17,5.0999 L17,5.0999 L17,15.5869 L22.586,21.1679 C23.44,22.0209 22.341,22.7809 21.774,23.1859 L21.774,23.1859 L15,16.4179 Z"
      id="Icon"
    />
  </Svg>
);

export default TimerClock;
