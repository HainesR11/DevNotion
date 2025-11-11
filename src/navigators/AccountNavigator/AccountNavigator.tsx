import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from '@DevEx/constants';
import AccountDetails from '@DevEx/screens/AccountManagment/AccountDetails/AccountDetails';
import AccountManagement from '@DevEx/screens/AccountManagment/AccountManagement';
import DebugScreen from '@DevEx/screens/Debug/debub';
import { TRootNavigationProps } from '@DevEx/utils/types/types';

const AccountNavigatorStack = createStackNavigator<TRootNavigationProps>();

const AccountNavigator = () => {
  return (
    <AccountNavigatorStack.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}
      initialRouteName={screenNames.ACCOUNT_MANAGEMENT}
    >
      <AccountNavigatorStack.Screen
        name={screenNames.ACCOUNT_MANAGEMENT}
        component={AccountManagement}
      />
      <AccountNavigatorStack.Screen
        name={screenNames.ACCOUNT_DETAILS}
        component={AccountDetails}
      />
      <AccountNavigatorStack.Screen
        name={screenNames.DEBUG_SCREEN}
        component={DebugScreen}
      />
    </AccountNavigatorStack.Navigator>
  );
};

export default AccountNavigator;
