import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from '@DevEx/constants';
import { ProfileScreen } from '@DevEx/screens';
import DebugScreen from '@DevEx/screens/Debug/debub';
import { TRootNavigationProps } from '@DevEx/utils/types/types';

const AccountNavigatorStack = createStackNavigator<TRootNavigationProps>();

const AccountNavigator = () => {
  return (
    <AccountNavigatorStack.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}
      initialRouteName={screenNames.PROFILE_SCREEN}
    >
      <AccountNavigatorStack.Screen
        name={screenNames.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <AccountNavigatorStack.Screen
        name={screenNames.DEBUG_SCREEN}
        component={DebugScreen}
      />
    </AccountNavigatorStack.Navigator>
  );
};

export default AccountNavigator;
