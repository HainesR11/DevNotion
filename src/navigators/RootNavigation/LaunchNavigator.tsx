import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ACCOUNT_NAVIGATOR,
  COMMENT_SCREEN,
  MESSAGES_NAVIGATOR,
  OPTIONS_SCREEN,
  TAB_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import CommentView from '@DevEx/screens/CommentView/CommentView';
import OptionsMenu from '@DevEx/screens/OptionsMenu/OptionsMenu';
import { TRootNavigationProps } from '@DevEx/utils/types/types';

import { AccountNavigator, MessagesNavigator, TabNavigator } from '../index';

import 'react-native-gesture-handler';

const AuthStack = createStackNavigator<TRootNavigationProps>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={TAB_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      <AuthStack.Screen
        options={{ presentation: 'modal' }}
        name={ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
      />
      <AuthStack.Screen
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
        name={COMMENT_SCREEN}
        component={CommentView}
      />
      <AuthStack.Screen
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
        name={OPTIONS_SCREEN}
        component={OptionsMenu}
      />
      <AuthStack.Screen
        name={MESSAGES_NAVIGATOR}
        component={MessagesNavigator}
        options={{
          headerShown: true,
          header: () => {
            return <></>; // Placeholder for custom header
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
