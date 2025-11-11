/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import createStyles from './LoadingSpinner.styles';

// import {Text} from '../../Text/text';

// interface ILoadingSpinner {
//   waitMessage?: boolean;
// }

// const LoadingSpinner = ({waitMessage}: ILoadingSpinner) => {
//   const animatedRef = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(animatedRef, {
//         toValue: 1,
//         duration: 1250,
//         easing: Easing.out(Easing.exp),
//         useNativeDriver: false,
//       }),
//     ).start();
//   });

//   return (
//     <View style={{alignItems: 'center'}}>
//       {waitMessage && <Text bold text={'Please Wait'} />}
//       <Animated.View
//         style={[
//           {
//             transform: [
//               {
//                 rotate: animatedRef.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: ['0deg', '360deg'],
//                 }),
//               },
//             ],
//           },
//         ]}>
//         <Image
//           source={require('@DevEx/assets/LoadingSpinner.png')}
//           style={{height: 30, width: 30}}
//         />
//       </Animated.View>
//     </View>
//   );
// };

const SpinnerItem = ({
  style,
  opacity,
  currentState,
}: {
  style: ViewStyle;
  opacity: number;
  currentState: number;
}) => {
  const styles = useThemedStyles(createStyles);

  const position =
    currentState || currentState === 0
      ? currentState === -0
        ? 0
        : currentState
      : 1;

  const opacityRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityRef, {
      toValue: position >= 1 ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  });

  return (
    <>
      <Animated.View
        style={[
          styles.spinnerItem,
          style,
          {
            opacity: opacityRef.interpolate({
              inputRange: [0, 1],
              outputRange: [0, opacity],
            }),
          },
        ]}
      />
    </>
  );
};

type TLoadingSpinner = {
  currentPosition?: number;
  totalPosition?: number;
  animate?: boolean;
};

const LoadingSpinner = ({
  currentPosition = 0,
  animate = false,
}: TLoadingSpinner) => {
  const animatedRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentPosition / 50 >= 1 || animate) {
      Animated.loop(
        Animated.timing(animatedRef, {
          toValue: 1,
          easing: Easing.linear,
          duration: 1250,
          useNativeDriver: false,
        }),
      ).start();
    }
  }, [animate, animatedRef, currentPosition]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        display: 'flex',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          {
            rotate: animatedRef.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}
    >
      <SpinnerItem
        currentState={currentPosition / 50}
        opacity={1}
        style={{
          top: '5%',
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 6.25}
        opacity={0.125}
        style={{
          top: '11%',
          left: '70%',
          transform: [{ rotate: '45deg' }],
          opacity: 0.125,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 12.5}
        opacity={0.25}
        style={{
          top: '35%',
          left: '75%',
          transform: [{ rotate: '90deg' }],
          opacity: 0.25,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 18.75}
        opacity={0.325}
        style={{
          top: '58%',
          left: '69%',
          transform: [{ rotate: '135deg' }],
          opacity: 0.325,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 25}
        opacity={0.5}
        style={{
          top: '65%',
          opacity: 0.5,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 31.25}
        opacity={0.625}
        style={{
          top: '58%',
          left: '23%',
          transform: [{ rotate: '45deg' }],
          opacity: 0.625,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 37.5}
        opacity={0.75}
        style={{
          left: '15%',
          transform: [{ rotate: '90deg' }],
          opacity: 0.75,
        }}
      />
      <SpinnerItem
        currentState={currentPosition / 41.75}
        opacity={0.825}
        style={{
          top: '13%',
          left: '23%',
          transform: [{ rotate: '135deg' }],
          opacity: 0.825,
        }}
      />
    </Animated.View>
  );
};

export default LoadingSpinner;
