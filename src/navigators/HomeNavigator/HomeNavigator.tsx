import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeHeader from '@DevEx/components/Headers/HomeHeader';
import { HOME_SCREEN, NOTIFICATION_SCREEN } from '@DevEx/constants/screenNames';
import HomeScreen from '@DevEx/screens/Home/Home';
import colors from '@DevEx/utils/styles/palette/colors';
import { THomeNavigatorProps } from '@DevEx/utils/types/types';

const HomeNavigatorStack = createStackNavigator<THomeNavigatorProps>();

const BaseLayer = () => {
  return <></>;
};

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeNavigatorStack.Screen
        options={{
          cardStyle: {
            backgroundColor: colors.grey5,
          },
          headerStyle: {
            backgroundColor: colors.grey2,
          },
          header: props =>
            HomeHeader({ isHomeScreen: true, title: props.route.name }),
        }}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeNavigatorStack.Screen
        options={{
          headerShown: false,
        }}
        name={NOTIFICATION_SCREEN}
        component={BaseLayer}
      />
    </HomeNavigatorStack.Navigator>
  );
};
export default HomeNavigator;
