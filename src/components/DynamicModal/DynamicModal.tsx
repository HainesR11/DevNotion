import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { Animated, Easing, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import isIOS from '@DevEx/utils/functions/isIOS/isIOS';
import { TNavigationProps } from '@DevEx/utils/types/types';

import createStyles from './DynamicModal.styles';

export interface DynamicHeightModalCoreProps {
  testID: string;
  header?: () => ReactNode | Element;
  children?: (() => ReactNode | Element) | ReactNode;
  triggerClose?: boolean;
  minHeight?: number;
  maxHeight?: number;
  style?: ViewStyle;
}

const DynamicModal: FC<DynamicHeightModalCoreProps> = props => {
  const {
    children,
    header,
    testID,
    maxHeight,
    style,
    triggerClose = false,
  } = props;
  const heightRef = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);

  useEffect(() => {
    Animated.timing(heightRef, {
      toValue: 559,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [heightRef]);

  const closeDynamicModal = useCallback(() => {
    Animated.timing(heightRef, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => navigation.goBack());
  }, [heightRef, navigation]);

  useEffect(() => {
    if (triggerClose === true) {
      closeDynamicModal();
    }
  }, [triggerClose, closeDynamicModal]);

  const renderChildren = () =>
    typeof children === 'function' ? <>{children()}</> : <>{children}</>;

  const setHeight = (modalHeight: number) => {
    switch (true) {
      case modalHeight > 300 && modalHeight < 654:
        Animated.timing(heightRef, {
          toValue: 559,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
        break;
      case modalHeight <= 300:
        closeDynamicModal();
        break;
      default:
        Animated.timing(heightRef, {
          toValue: isIOS(869, 840),
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
    }
  };

  return (
    <View style={[styles.background]} testID={testID}>
      <View style={styles.fillScreen} onTouchStart={closeDynamicModal} />
      <Animated.View
        style={[styles.wrapper, { height: heightRef, maxHeight: maxHeight }]}
      >
        <View testID="dynamic-height-modal-panel" style={style}>
          <Animated.View
            testID="dynamic-height-modal-header"
            style={styles.header}
            onTouchMove={e =>
              heightRef.setValue(isIOS(939, 850) - e.nativeEvent.pageY)
            }
            onTouchEnd={e => setHeight(isIOS(939, 850) - e.nativeEvent.pageY)}
          >
            <View style={styles.headerBar} />
          </Animated.View>
          <View style={styles.header}>
            <>{header?.()}</>
          </View>
          <View style={[styles.content]}>{renderChildren()}</View>
        </View>
      </Animated.View>
      <View style={styles.fillScreen} onTouchStart={closeDynamicModal} />
    </View>
  );
};

export default DynamicModal;
