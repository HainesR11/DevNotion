import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faBell, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

import { MessagesPlane } from '@DevEx/assets/Icons/Linear/MessagesPlane';
import {
  MESSAGES_NAVIGATOR,
  NOTIFICATION_SCREEN,
} from '@DevEx/constants/screenNames';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { THeaderProps, TNavigationProps } from '@DevEx/utils/types/types';

import NotificationIcon from '../NotificationIcon/NotificationIcon';
import { Text } from '../Text/text';

import createStyles from './Header.styles';

export const HomeHeader = ({ isHomeScreen = true, title }: THeaderProps) => {
  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);

  if (!isHomeScreen) {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
        <TouchableOpacity
          style={styles.chevron}
          testID="go-back-chevron"
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          textStyle={styles.title}
          text={title as string}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.HomeScreenContainer}>
      <Image
        style={styles.image}
        source={require('@DevEx/assets/DevNotionLogo.png')}
      />
      <View style={styles.iconContainer}>
        <NotificationIcon
          count={1}
          testId="notification-bell-icon"
          icon={faBell}
          size={20}
          onPress={() => navigation.navigate(NOTIFICATION_SCREEN)}
        />
        <NotificationIcon
          type="Numbered"
          count={1}
          testId="messages-plane-icon"
          icon={MessagesPlane}
          size={25}
          dotStyle={styles.messagesDot}
          onPress={() => navigation.navigate(MESSAGES_NAVIGATOR)}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeHeader;
