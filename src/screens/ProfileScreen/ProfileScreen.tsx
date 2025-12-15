import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Text } from '@DevEx/components';
import UserIconWrapper from '@DevEx/components/user-icon-wrapper/UserIconWrapper';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { RootState } from '@DevEx/utils/store/store';

import createStyles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const styles = useThemedStyles(createStyles);

  return (
    <SafeAreaView>
      <View /* Profile section */ style={styles.profileInfoContainer}>
        <UserIconWrapper image={user.profilePic} />
        <View style={styles.userInfo}>
          <Text text={user.name} />
          <Text text={user.username} />
        </View>
      </View>
      <View /* Posts section */></View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
