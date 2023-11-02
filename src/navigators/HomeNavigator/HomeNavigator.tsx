import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeHeader} from '@DevEx/components/Headers/Headers';
import {HOME_SCREEN} from '@DevEx/constants/screenNames';
import Home from '@DevEx/screens/Home';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

const HomeNavigatorStack = createStackNavigator<TRootNavigationProps>();

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        header: () => <HomeHeader />,
      }}>
      <HomeNavigatorStack.Screen name={HOME_SCREEN} component={Home} />
    </HomeNavigatorStack.Navigator>
  );
};
export default HomeNavigator;
