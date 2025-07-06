import React from 'react';
import {
  faBars,
  faHouse,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NotificationIcon from '@DevEx/components/NotificationIcon/NotificationIcon';
import {
  ACCOUNT_MANAGEMENT,
  COMMUNITIES_NAVIGATOR,
  HOME_NAVIGATOR,
  SEARCH_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import HomeNavigator from '@DevEx/navigators/HomeNavigator/HomeNavigator';
import {SearchScreen} from '@DevEx/screens';
import colors from '@DevEx/utils/styles/palette/colors';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

import AccountNavigator from '../AccountNavigator/AccountNavigator';

const TabNavStack = createBottomTabNavigator<TRootNavigationProps>();

const BaseLayer = () => {
  return <></>;
};

const TabNavigator = () => {
  const [count, setCount] = React.useState(2);

  const onPress = (navigate?: () => void) => {
    navigate && navigate();
    setCount(0);
  };

  return (
    <TabNavStack.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '8%',
        },
      }}
      initialRouteName={HOME_NAVIGATOR}>
      <TabNavStack.Screen
        name={HOME_NAVIGATOR}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faHouse,
            }),
        }}
        component={HomeNavigator}
      />
      <TabNavStack.Screen
        name={SEARCH_NAVIGATOR}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faMagnifyingGlass,
            }),
        }}
      />
      <TabNavStack.Screen
        name={COMMUNITIES_NAVIGATOR}
        options={({navigation}) => ({
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            NotificationIcon({
              onPress: () =>
                onPress(() => navigation.navigate(COMMUNITIES_NAVIGATOR)),
              count: count,
              icon: faUserGroup,
              size,
              state: focused ? 'selected' : 'inactiveTab',
            }),
        })}
        component={BaseLayer}
      />
      <TabNavStack.Screen
        name={ACCOUNT_MANAGEMENT}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faBars,
            }),
        }}
        component={AccountNavigator}
      />
    </TabNavStack.Navigator>
  );
};

export default TabNavigator;
