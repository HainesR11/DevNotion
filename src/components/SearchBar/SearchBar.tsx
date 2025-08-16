import React, { useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, View } from 'react-native';

import { SearchInput } from '@DevEx/components/input';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import createStyles from './SearchBar.styles';

type SearchBarProps = {
  onChange: (e: string) => void;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const [searchActive, setSearchActive] = useState(false);

  const styles = useThemedStyles(createStyles);

  useEffect(() => {
    searchActive &&
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: 75,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
  }, [animatedOpacity, animatedWidth, searchActive]);

  const handleCancel = () => {
    Keyboard.dismiss();

    Animated.parallel([
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedWidth, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => finished && setSearchActive(false));
  };

  return (
    <View style={styles.searchBarContainer}>
      <SearchInput
        onChange={e => onChange(e)}
        clearButtonMode="while-editing"
        onFocus={() => setSearchActive(true)}
        style={styles.searchInput}
      />
      {searchActive && (
        <Animated.View style={styles.animatedView}>
          <Animated.Text
            onPress={handleCancel}
            style={[
              styles.animatedText,
              {
                width: animatedWidth,
                opacity: animatedOpacity,
              },
            ]}
          >
            Cancel
          </Animated.Text>
        </Animated.View>
      )}
    </View>
  );
};

export default SearchBar;
