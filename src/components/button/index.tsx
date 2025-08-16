import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { TButtonProps } from '@DevEx/utils/types/types';

import LoadingSpinner from '../layouts/loadingSpinner/loadingSpinner';

import { createStyles } from './Button.styles';

export const Button = ({
  type = 'Primary',
  styles,
  title,
  isLoading,
  onPress,
  disabled = false,
}: TButtonProps) => {
  const style = useThemedStyles(createStyles);

  return type === 'Primary' ? (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          style.button,
          style.button.container,
          styles,
          disabled ? style.disbaledBackground : style.background,
        ]}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Text style={style.button.primaryText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...style.button.container, ...styles }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Text style={style.button.secondaryText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

type TRadioButton = {
  text: string;
};

export const RadioButton = ({ text }: TRadioButton) => {
  const styles = useThemedStyles(createStyles);
  const [checked, setChecked] = useState<boolean>(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (checked) {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    if (!checked) {
      rotateAnim.setValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View style={styles.radioContainer}>
      <Pressable onPress={() => setChecked(!checked)} style={styles.radio}>
        {checked && (
          <Animated.View style={{ opacity: rotateAnim }}>
            <FontAwesomeIcon icon={faCheck} />
          </Animated.View>
        )}
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
};
