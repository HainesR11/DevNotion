import React, { useEffect } from 'react';
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  faHeart,
  faLaughSquint,
  faLightbulb,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';

import { Text } from '../Text/text';

import createStyles from '../PostItem/PostItem.styles';

const LikeOptions = ({
  closeLiked,
  setLiked,
  animatedValues,
}: {
  closeLiked: (value: boolean) => void;
  setLiked: (value: 'LIKE' | 'LOVE' | 'IDEA' | 'LAUGH') => void;
  animatedValues: {
    animatedPosition: any;
    animatedOpacity: any;
  };
}) => {
  const styles = useThemedStyles(createStyles);

  useEffect(() => {
    Animated.timing(animatedValues.animatedPosition, {
      toValue: 40,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedValues.animatedOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.LikedOptionsPillContainer}>
      <Animated.View
        style={[
          styles.LikedOptionsPillAnimatedContainer,
          {
            opacity: animatedValues.animatedOpacity,
            bottom: animatedValues.animatedPosition,
          },
        ]}
      >
        <TouchableOpacity onPress={() => setLiked('LIKE')}>
          <FontAwesomeIcon icon={faThumbsUp} color={colors.primaryBlue} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLiked('LOVE')}>
          <FontAwesomeIcon icon={faHeart} color={colors.criticalRed} />
        </TouchableOpacity>
        {/* {/* <FontAwesomeIcon icon={} /> */}

        <TouchableOpacity onPress={() => setLiked('LAUGH')}>
          <FontAwesomeIcon
            icon={faLaughSquint}
            secondaryColor={colors.black}
            color={colors.yellow}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLiked('IDEA')}>
          <FontAwesomeIcon icon={faLightbulb} />
        </TouchableOpacity>
      </Animated.View>
      <TouchableWithoutFeedback onPressOut={() => closeLiked(false)}>
        <Text textStyle={styles.LikedOptionsPillText} text=" Tap to cancel" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LikeOptions;
