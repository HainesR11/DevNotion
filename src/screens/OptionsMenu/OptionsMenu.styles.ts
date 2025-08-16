import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    ModalContainer: {
      marginHorizontal: 20,
    },
    ViewContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    ButtonContainer: {
      width: '100%',
      display: 'flex',
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    IconContainer: {
      flex: 1,
    },
    ButtonText: {
      flex: 8,
      fontFamily: 'Kinit',
    },
  });

export default createStyles;
