import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

import { Text } from '@DevEx/components/Text/text';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { gradients } from '@DevEx/utils/styles/theme';

import createStyles from './ModalHeader.styles';

type TModalHeader = {
  title?: string;
  onClose?: () => void;
  isFirstScreen?: boolean;
  closeHidden?: boolean;
};

const ModalHeader = ({
  title,
  onClose,
  closeHidden = false,
  isFirstScreen = true,
}: TModalHeader) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  const onBackHandler = () => navigation.goBack();
  const onCloseHandler = () => {
    const parent = navigation.getParent();
    if (onClose) {
      onClose();
    } else {
      if (parent) {
        parent.goBack();
      } else {
        onBackHandler();
      }
    }
  };

  return (
    <View style={styles.header}>
      <LinearGradient
        style={styles.gradientLine}
        colors={gradients.devexMainGradient}
      />
      <View
        style={[
          isFirstScreen ? styles.offset : undefined,
          styles.iconContainer,
        ]}
      >
        {!isFirstScreen && (
          <TouchableOpacity onPress={onBackHandler}>
            <FontAwesomeIcon size={17} icon={faChevronLeft} />
          </TouchableOpacity>
        )}
        {title ? (
          <Text text={title} />
        ) : (
          <Image
            style={styles.image}
            source={require('@DevEx/assets/DevExIcon.png')}
          />
        )}
        {!closeHidden && (
          <TouchableOpacity onPress={onCloseHandler}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default ModalHeader;
