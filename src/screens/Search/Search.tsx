import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import TimerClock from '@DevEx/assets/Icons/Linear/TimerClock';
import SearchBar from '@DevEx/components/SearchBar/SearchBar';
// import {useSelector} from 'react-redux';
import IconText from '@DevEx/components/Text/IconText';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
// import {RootState} from '@DevEx/utils/store/store';
import theme from '@DevEx/utils/styles/theme';

import createStyles from './Search.styles';

const SearchScreen = () => {
  const styles = useThemedStyles(createStyles);

  // const searchHistory = useSelector(
  //   (state: RootState) => state.user.searchHistory,
  // );

  const searchHistoryArray = ['search1', 'search2', 'search3'];
  const [searchHistory, setSearchHistory] =
    useState<string[]>(searchHistoryArray);
  const [searchText, setSearchText] = useState('');

  console.log(searchText);

  return (
    <SafeAreaView style={{marginHorizontal: theme.spacing.m}}>
      <SearchBar onChange={setSearchText} />
      <ScrollView style={styles.searchListContainer}>
        <View style={styles.searchListOptionsContainer}>
          <Text style={styles.searchListOptionsRecents}>Recent</Text>
          <Text
            style={styles.searchListOptionsClear}
            onPress={() => setSearchHistory([])}>
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
