import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import { Text } from '../Text/text';

import createStyles from './OutlineTextInput.styles';

interface TOutlineTextInput extends TextInputProps {
  title: string;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  state?: 'error' | 'regular';
  secureTextEntry?: boolean;
  helpText?: string;
}

const OutlineTextInput = ({
  title,
  style,
  state = 'regular',
  testID,
  secureTextEntry,
  ...rest
}: TOutlineTextInput) => {
  const [secure, setSecure] = useState(secureTextEntry ?? false);
  const styles = useThemedStyles(createStyles);

  const helpTextStyle =
    state === 'error' ? styles.textError : styles.regularText;
  const outlineStyle =
    state === 'regular' ? styles.outlineRegular : styles.outlineError;

  return (
    <View style={style} testID={testID}>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={secure}
          style={[styles.input, state === 'error' && styles.textError]}
          testID={`${testID}-entry-field`}
          {...rest}
        />

        {secureTextEntry && (
          <Pressable
            style={styles.secureIcon}
            onPress={() => setSecure(!secure)}
            accessibilityRole="button"
          >
            <FontAwesomeIcon icon={secure ? faEyeSlash : faEye} size={24} />
          </Pressable>
        )}
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.outline,
            outlineStyle,
            state === 'error' && styles.outlineError,
          ]}
          pointerEvents="none"
        />

        {title && (
          <View style={styles.titleContainer} pointerEvents="none">
            <Text
              text={title}
              testId="OutlineTextInput.title"
              textStyle={[helpTextStyle]}
            />
          </View>
        )}
      </View>

      {/* {helpText && <ValidationText text={helpText} />} */}
    </View>
  );
};
export default OutlineTextInput;
