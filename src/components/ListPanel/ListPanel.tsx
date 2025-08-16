import React from 'react';
import { View, ViewStyle } from 'react-native';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';

import { Text } from '../Text/text';

import createStyles from './ListPanel.styles';

type TListPanel = {
  title: string;
  data: Array<TDataObject>;
  style?: ViewStyle;
  active: number;
};

type TDataObject = { id: number; text: string };

const ListPanel = ({ title, data, active, style }: TListPanel) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={[style, styles.instructionsContainer]}>
      <Text
        bold
        textStyle={[styles.textColor, styles.instructionHeader]}
        text={title}
      />
      {data.map((instruction: TDataObject) => {
        return (
          <View style={styles.instructionContainer}>
            <View
              style={[
                instruction.id === active
                  ? styles.activeStep
                  : styles.inActiveStep,
                styles.instructionId,
              ]}
            >
              <Text
                textStyle={styles.instructionIdNumber}
                text={`${instruction.id}`}
              />
            </View>
            <Text textStyle={styles.textColor} text={instruction.text} />
          </View>
        );
      })}
    </View>
  );
};

export default ListPanel;
