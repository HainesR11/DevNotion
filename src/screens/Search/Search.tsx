import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import TimerClock from '@DevEx/assets/Icons/Linear/TimerClock';
import SearchBar from '@DevEx/components/SearchBar/SearchBar';
import IconText from '@DevEx/components/Text/IconText';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {
  removeSearch,
  clearSearchHistory,
} from '@DevEx/utils/store/userSlice/userSlice';
import theme from '@DevEx/utils/styles/theme';

import createStyles from './Search.styles';

const SearchScreen = () => {
  const styles = useThemedStyles(createStyles);
  const dispatch = useDispatch();

  const searchHistoryState = useSelector(
    (state: RootState) => state.user.searchHistory,
  );

  const [searchHistory, setSearchHistory] =
    useState<string[]>(searchHistoryState);
  const [searchText, setSearchText] = useState('');

  const clearSearchHistoryFn = () => {
    setSearchHistory([]);
    dispatch(clearSearchHistory());
  };

  return (
    <SafeAreaView style={{marginHorizontal: theme.spacing.m}}>
      <SearchBar onChange={setSearchText} />
      <ScrollView style={styles.searchListContainer}>
        <View style={styles.searchListOptionsContainer}>
          <Text style={styles.searchListOptionsRecents}>Recent</Text>
          <Text
            style={styles.searchListOptionsClear}
            onPress={clearSearchHistoryFn}>
            Clear
          </Text>
        </View>
        <View
          style={{
            marginTop: theme.spacing.ssm,
            marginHorizontal: theme.spacing.ml,
          }}>
          {searchHistory.map((item, index) => {
            return (
              <IconText
                testId={`search-item-${index}`}
                text={item}
                iconSize={25}
                icon={TimerClock}
                enableRemove
                onRemove={() => {
                  const test = searchHistory.splice(index, 1);
                  setSearchHistory(
                    searchHistory.filter(() => item === test[0]),
                  );
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SearchScreen;
