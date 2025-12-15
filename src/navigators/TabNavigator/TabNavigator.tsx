import React from 'react';
import { useSelector } from 'react-redux';
import {
  faAdd,
  faHouse,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationIcon from '@DevEx/components/NotificationIcon/NotificationIcon';
import UserIconWrapper from '@DevEx/components/user-icon-wrapper/UserIconWrapper';
import {
  ADD_POST_NAVIGATOR,
  COMMUNITIES_NAVIGATOR,
  HOME_NAVIGATOR,
  PROFILE_SCREEN,
  SEARCH_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import HomeNavigator from '@DevEx/navigators/HomeNavigator/HomeNavigator';
import { RootState } from '@DevEx/utils/store/store';
import colors from '@DevEx/utils/styles/palette/colors';
import { TRootNavigationProps } from '@DevEx/utils/types/types';

import AccountNavigator from '../AccountNavigator/AccountNavigator';
import SearchNavigator from '../SearchNavigator/SearchNavigator';

const TabNavStack = createBottomTabNavigator<TRootNavigationProps>();

const BaseLayer = () => {
  return <></>;
};

const TabNavigator = () => {
  const [count, setCount] = React.useState(2);

  const userProfilePic = useSelector(
    (state: RootState) => state.user.user.profilePic,
  );

  const onPress = (navigate?: () => void) => {
    navigate?.();
    setCount(0);
  };

  return (
    <TabNavStack.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '9%',
        },
        headerShown: false,
      }}
      initialRouteName={HOME_NAVIGATOR}
    >
      <TabNavStack.Screen
        name={HOME_NAVIGATOR}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size }) =>
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
        component={SearchNavigator}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, size }) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faMagnifyingGlass,
            }),
        }}
      />
      <TabNavStack.Screen
        component={BaseLayer}
        name={ADD_POST_NAVIGATOR}
        options={{
          title: 'Add Post',
          tabBarIcon: ({ focused, size }) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faAdd,
            }),
        }}
      />
      <TabNavStack.Screen
        name={COMMUNITIES_NAVIGATOR}
        options={({ navigation }) => ({
          title: 'Communities',
          tabBarIcon: ({ focused, size }) =>
            NotificationIcon({
              onPress: () =>
                onPress(navigation.navigate(COMMUNITIES_NAVIGATOR)),
              count: count,
              icon: faUserGroup,
              size,
              state: focused ? 'selected' : 'inactiveTab',
            }),
        })}
        component={BaseLayer}
      />
      <TabNavStack.Screen
        name={PROFILE_SCREEN}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) =>
            UserIconWrapper({
              image: userProfilePic,
              styleType: 'navigator',
              state: focused ? 'selected' : 'inactiveTab',
            }),
        }}
        component={AccountNavigator}
      />
    </TabNavStack.Navigator>
  );
};

export default TabNavigator;
