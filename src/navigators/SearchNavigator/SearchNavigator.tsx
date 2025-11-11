import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SEARCH_SCREEN,
  SEARCH_VIEW_ALL_SCREEN,
} from '@DevEx/constants/screenNames';
import { SearchScreen } from '@DevEx/screens';
import SearchHistoryScreen from '@DevEx/screens/Search/SearchHistoryScreen';
import { TSearchNavigatorProps } from '@DevEx/utils/types/types';

const SearchStack = createStackNavigator<TSearchNavigatorProps>();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name={SEARCH_SCREEN} component={SearchScreen} />
      <SearchStack.Screen
        name={SEARCH_VIEW_ALL_SCREEN}
        component={SearchHistoryScreen}
      />
    </SearchStack.Navigator>
  );
};
export default SearchNavigator;
