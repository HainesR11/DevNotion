import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Text } from '@DevEx/components';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { TOptions } from '@DevEx/utils/types/types';

import DynamicModal from '../../components/DynamicModal/DynamicModal';

import createStyles from './OptionsMenu.styles';

interface IOptionsMenu {
  route?: {
    key: string;
    name: string;
    path?: string;
    params: { options: TOptions[] };
  };
}

const OptionsMenu: FC<IOptionsMenu> = ({ route }: IOptionsMenu) => {
  const options = route?.params.options;

  const [triggerClose, setTriggerClose] = React.useState(false);

  const styles = useThemedStyles(createStyles);

  return (
    <DynamicModal
      triggerClose={triggerClose}
      testID="options-menu-modal"
      maxHeight={68 * (options?.length ? options?.length : 1)}
      style={styles.ModalContainer}
    >
      <View
        style={[
          styles.ViewContainer,
          {
            height: 50 * (options?.length ? options?.length : 1),
          },
        ]}
      >
        {options?.map((option: TOptions, index: number) => {
          const { iconSize, onPress, name, icon, color } = option;
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  onPress();
                  setTriggerClose(true);
                }}
                style={styles.ButtonContainer}
              >
                <View style={styles.IconContainer}>
                  <FontAwesomeIcon
                    icon={icon as IconProp}
                    color={color}
                    size={iconSize}
                  />
                </View>
                <Text
                  text={name}
                  size={20}
                  bold
                  textStyle={[
                    styles.ButtonText,
                    {
                      color: color,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </DynamicModal>
  );
};

export default OptionsMenu;
