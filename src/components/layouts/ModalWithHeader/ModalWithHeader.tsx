import React from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { LoadingSpinner } from '@DevEx/screens';
import { gradients } from '@DevEx/utils/styles/theme';

import createStyles from './ModalWithHeader.styles';

interface THeaderProps {
  goBack?: () => void;
  onClose?: () => void;
  closeHidden?: boolean;
  isFirstPage: boolean;
}
interface TModalWithHeader extends THeaderProps {
  children: React.ReactNode;
  inList?: boolean;
  isLoading?: boolean;
  testID: string;
  isFromDeeplink?: boolean;
  isVisible: boolean;
  onRequestClose: () => void;
  isFirstPage: boolean;
}

const Header = ({
  goBack,
  onClose,
  closeHidden,
  isFirstPage,
}: THeaderProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.header}>
      <LinearGradient
        style={styles.gradientLine}
        colors={gradients.devexMainGradient}
      />
      <View
        style={[isFirstPage ? styles.offset : undefined, styles.iconContainer]}
      >
        {!isFirstPage && (
          <TouchableOpacity onPress={() => goBack}>
            <FontAwesomeIcon size={17} icon={faChevronLeft} />
          </TouchableOpacity>
        )}
        <Image
          style={styles.image}
          source={require('@DevEx/assets/DevExIcon.png')}
        />
        {!closeHidden && (
          <TouchableOpacity onPress={onClose}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const ModalWithHeader = ({
  children,
  isLoading,
  isVisible,
  onRequestClose,
  goBack,
  isFirstPage = true,
  closeHidden = false,
}: // isFromDeeplink = false,
// testID,
// ...rest
TModalWithHeader) => {
  const renderChildren = () => <>{children}</>;

  if (isLoading) {
    return <LoadingSpinner animating />;
  }

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onRequestClose}
      presentationStyle="pageSheet"
    >
      <Header
        isFirstPage={isFirstPage}
        closeHidden={closeHidden}
        onClose={onRequestClose}
        goBack={goBack}
      />
      {renderChildren()}
    </Modal>
  );
};

export default ModalWithHeader;
