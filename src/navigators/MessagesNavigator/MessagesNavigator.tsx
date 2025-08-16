import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  MESSAGES_SCREEN_HOME,
  MESSAGES_SCREEN_MESSAGE,
} from '@DevEx/constants/screenNames';
import { TRootNavigationProps } from '@DevEx/utils/types/types';

const Stack = createStackNavigator<TRootNavigationProps>();

const BaseLayer = () => {
  return <></>;
};

const MessagesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MESSAGES_SCREEN_HOME} component={BaseLayer} />
      <Stack.Screen name={MESSAGES_SCREEN_MESSAGE} component={BaseLayer} />
    </Stack.Navigator>
  );
};
export default MessagesNavigator;
