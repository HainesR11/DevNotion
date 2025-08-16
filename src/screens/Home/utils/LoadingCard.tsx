import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, View } from 'react-native';

import { Text } from '@DevEx/components';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import { createStyles } from './LoadingCard.styles';

const LoadingCard = ({
  animatedProfilePositionRef,
  animatedTitleRef,
  index,
  animatedTextPositionRef,
}: {
  animatedProfilePositionRef: Animated.Value;
  animatedTitleRef: Animated.Value;
  animatedTextPositionRef: Animated.Value;
  index: number;
}) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View key={`Loading-Card-${index}`} style={styles.LoadingCardContainer}>
      <View style={styles.LoadingCardTitleContainer}>
        <View style={styles.LoadingCardTitlePicture}>
          <Animated.View
            style={[
              styles.LoadingCardTextBarLoader,
              {
                left: animatedProfilePositionRef,
              },
            ]}
          />
        </View>
        <View style={styles.LoadingCardTitleBar}>
          <Animated.View
            style={[
              styles.LoadingCardTextBarLoader,
              {
                left: animatedTitleRef,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.LoadingCardTextBarContainer}>
        <View style={styles.LoadingCardTextBar}>
          <Animated.View
            style={[
              styles.LoadingCardTextBarLoader,
              {
                left: animatedTextPositionRef,
              },
            ]}
          />
        </View>
        <View style={styles.LoadingCardTextBar}>
          <Animated.View
            style={[
              styles.LoadingCardTextBarLoader,
              {
                left: animatedTextPositionRef,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const RenderLoading = ({ count }: { count: number }) => {
  const styles = useThemedStyles(createStyles);
  const animatedTextPositionRef = useRef(new Animated.Value(-15)).current;
  const animatedProfilePositionRef = useRef(new Animated.Value(-10)).current;
  const animatedTitleRef = useRef(new Animated.Value(-70)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedTitleRef, {
        toValue: 300,
        duration: 2500,
        easing: Easing.quad,
        useNativeDriver: false,
      }),
    ).start();
    Animated.loop(
      Animated.timing(animatedProfilePositionRef, {
        toValue: 360,
        duration: 2500,
        easing: Easing.quad,
        useNativeDriver: false,
      }),
    ).start();
    Animated.loop(
      Animated.timing(animatedTextPositionRef, {
        toValue: 360,
        duration: 2500,
        easing: Easing.quad,
        useNativeDriver: false,
      }),
    ).start();
  }, [animatedTitleRef, animatedProfilePositionRef, animatedTextPositionRef]);

  return (
    <View style={styles.LoadingRenderContainer}>
      <View key={1} style={styles.LoadingUpdateContainer}>
        <Image
          source={require('@DevEx/assets/me.jpg')}
          style={styles.updateImage}
        />
        <Text
          text="What on your mind?"
          testId="LoadingInputTextBox"
          textStyle={styles.updateInputBox}
        />
      </View>
      {Array.from({ length: count }).map((_item, index) => (
        <LoadingCard
          animatedProfilePositionRef={animatedProfilePositionRef}
          animatedTextPositionRef={animatedTextPositionRef}
          animatedTitleRef={animatedTitleRef}
          index={index}
          key={`LoadingCard-${index}`}
        />
      ))}
    </View>
  );
};

export default RenderLoading;
