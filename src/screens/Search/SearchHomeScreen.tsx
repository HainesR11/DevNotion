import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import TimerClock from '@DevEx/assets/Icons/Linear/TimerClock';
import SearchBar from '@DevEx/components/SearchBar/SearchBar';
import SearchIconText from '@DevEx/components/Text/SearchIconText';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { RootState } from '@DevEx/utils/store/store';
import theme from '@DevEx/utils/styles/theme';

import createStyles from './Search.styles';
import { Text } from '@DevEx/components';
import { noop } from '@DevEx/utils/functions/minorFunctions';
import { SEARCH_VIEW_ALL_SCREEN } from '@DevEx/constants/screenNames';
import { TSearchNavigatorProps } from '@DevEx/utils/types/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { setSearchHistory as setSearchHistoryState } from '@DevEx/utils/store/userSlice/userSlice';

const SearchScreen = () => {
  const styles = useThemedStyles(createStyles);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<StackNavigationProp<TSearchNavigatorProps>>();

  const searchHistoryState = useSelector(
    (state: RootState) => state.user.searchHistory,
  );

  const [searchHistory, setSearchHistory] = useState<string[]>(
    searchHistoryState.slice(0, 8),
  );

  return (
    <SafeAreaView style={{ marginHorizontal: theme.spacing.m }}>
      <SearchBar onChange={() => {}} />
      <View style={styles.searchListOptionsContainer}>
        <Text text="Recent" textStyle={styles.searchListOptionsRecents} />
        <Text
          size={theme.spacing.sm}
          text="See All"
          textStyle={styles.searchListOptionsClear}
          bold
          onPress={() => navigation.navigate(SEARCH_VIEW_ALL_SCREEN)}
        />
      </View>
      <View
        style={
          (styles.searchListContainer,
          {
            marginVertical: theme.spacing.ssm,
            marginHorizontal: theme.spacing.ml,
          })
        }
      >
        {searchHistory.map((item, index) => {
          return (
            <SearchIconText
              testId={`search-item-${index}`}
              key={'search-item-' + index}
              text={item}
              iconSize={25}
              icon={TimerClock}
              enableRemove
              onPress={noop}
              onRemove={() => {
                const historyIndex = searchHistory.splice(index, 1);
                setSearchHistory(
                  searchHistory.filter(() => item === historyIndex[0]),
                );
                dispatch(setSearchHistoryState(searchHistory));
              }}
            />
          );
        })}
      </View>
      <View>
        <Text text="Try Searching For" />
        <Text
          text="Based on your recent activity"
          size={theme.spacing.ssm}
          textStyle={{
            color: theme.colors.grey50,
            fontWeight: 'light',
          }}
        />
        {/** Add some suggestions on what to search for */}
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
