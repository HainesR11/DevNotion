import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@DevEx/components';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import createStyles from './Onboarding.styles';

const AddProfielPic = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <SafeAreaView>
      <View>
        <Text
          bold
          textStyle={styles.headerText}
          text={"Let's make this account yours"}
        />
        <Text
          bold
          textStyle={[styles.headerText, styles.padding]}
          text={'Why not add a username?'}
        />
        <Text
          textStyle={styles.extraText}
          text={'This will make it easier for other users to find you '}
        />
      </View>
      <View />
    </SafeAreaView>
  );
};

export default AddProfielPic;
