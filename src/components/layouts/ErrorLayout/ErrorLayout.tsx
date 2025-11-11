import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Button } from '@DevEx/components/Button';
import { Text } from '@DevEx/components/Text/text';
import { strings } from '@DevEx/constants/stings';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import useLogout from '@DevEx/utils/functions/useLogout/useLogout';
import theme from '@DevEx/utils/styles/theme';

import createStyles from './ErrorLayout.styles';

type TErrorLayout = {
  title?: string;
  onPress?: () => void;
  hasBody?: boolean;
  bodyText?: string;
};

const ErrorLayout = ({
  title = strings.error.errorScreenTitle,
  onPress,
  hasBody = false,
  bodyText = strings.error.errorScreenBody,
}: TErrorLayout) => {
  const logout = useLogout();
  const styles = useThemedStyles(createStyles);

  return (
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
      <View style={styles.textContainer}>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          size={80}
          color={theme.colors.errorDark}
        />
        <View>
          <Text
            bold
            textStyle={{ color: theme.colors.grey70 }}
            size={20}
            text={title}
          />
          {hasBody && <Text size={14} text={bodyText} />}
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        {onPress && (
          <Button type="Primary" onPress={onPress} title="Try Again" />
        )}
        <TouchableOpacity>
          <Text
            text="Log out"
            onPress={() => {
              logout();
              RNRestart.Restart();
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ErrorLayout;
