import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Button, GradientText, Text} from '@DevEx/components';
import ModalHeader from '@DevEx/components/layouts/ModalWithHeader/ModalHeader/ModalHeader';
import {ACCOUNT_DETAILS, DEBUG_SCREEN} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {clearUser} from '@DevEx/utils/store/userSlice/userSlice';
import {TAccountManagement, TNavigationProps} from '@DevEx/utils/types/types';

import createStyles from './AccountManagement.styles';

type TAccountManagementItem = {
  title: string;
  screenName: keyof TAccountManagement;
};

const AccountManagementItem = ({title, screenName}: TAccountManagementItem) => {
  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.AccountItemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Text textStyle={styles.AccountItemText} text={title} />
      </TouchableOpacity>
    </View>
  );
};

const AccountManagement = () => {
  const data = [
    {
      title: 'Account Details',
      screenName: ACCOUNT_DETAILS,
      rules: [],
    },
    {
      title: 'Debug',
      screenName: DEBUG_SCREEN,
      rules: [__DEV__],
    },
  ];

  const filteredActions = data.filter(item => {
    return item.rules.every(rule => rule === true);
  });

  const {user} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const styles = useThemedStyles(createStyles);

  return (
    <SafeAreaView edges={['top']} style={styles.accountManagmentContainer}>
      <View>
        <View style={styles.headerContainer}>
          <Image
            source={require('@DevEx/assets/me.jpg')}
            style={styles.AccountManagementImage}
          />
          <View>
            <GradientText
              bold
              gradientStyle="devexMainGradient"
              textStyle={styles.gradientHeaderText}
              text={user.name}
            />
            <Text textStyle={styles.headerText} text={user.email} />
          </View>
        </View>
        {filteredActions.map(({title, screenName}, index) => {
          return (
            <AccountManagementItem
              key={index}
              title={title}
              screenName={screenName as keyof TAccountManagement}
            />
          );
        })}
        <View style={styles.logoutButton}>
          <Button
            type="Secondary"
            title="Log Out"
            onPress={() => dispatch(clearUser())}
          />
        </View>
      </View>
      <View style={styles.logoutButton}>
        <Text text={`v${DeviceInfo.getVersion()}`} />
      </View>
    </SafeAreaView>
  );
};
export default AccountManagement;
