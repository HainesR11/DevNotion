import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import { Text } from '../Text/text';

import createStyles from './Header.styles';

type THeaderParams = 'Comments' | 'Likes';

export const CommentViewHeader = (
  activeHeader: string,
  onPress: Dispatch<SetStateAction<THeaderParams>>,
) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.commentContainer}>
      <View
        style={[
          styles.textViewContainer,
          {
            borderBottomWidth: activeHeader === 'Likes' ? 1 : undefined,
          },
        ]}
      >
        <Text
          textStyle={styles.textStyle}
          bold={activeHeader === 'Likes'}
          text={'Likes'}
          onPress={() => onPress('Likes')}
        />
      </View>
      <View
        style={[
          styles.textViewContainer,
          {
            borderBottomWidth: activeHeader === 'Comments' ? 1 : undefined,
          },
        ]}
      >
        <Text
          textStyle={styles.textStyle}
          bold={activeHeader === 'Comments'}
          text={'Comments'}
          onPress={() => onPress('Comments')}
        />
      </View>
    </View>
  );
};
