import React from 'react';
import { View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';

import { Button, Text } from '@DevEx/components';
import ScreenWithHeader from '@DevEx/components/layouts/ScreenWithHeader/ScreenWithHeader';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { accountDetailsStub } from '@DevEx/testing/stubs';
import {
  setSearchHistory,
  setUser,
} from '@DevEx/utils/store/userSlice/userSlice';

import createStyles from './debug.styles';

type TDebugItem = {
  title: string;
  value: string;
};

const DebugItem = ({ value, title }: TDebugItem) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.DebugItemContainer}>
      <Text textStyle={styles.DebugItemTitle} text={title} />
      <Text textStyle={styles.DebugItemValue} text={value} />
    </View>
  );
};

const debugData = [
  {
    title: 'Platform',
    subtitle: DeviceInfo.getBrand() + ' ' + DeviceInfo.getModel(),
  },
  { title: 'OS Version', subtitle: DeviceInfo.getSystemVersion() },
  { title: 'App Name', subtitle: DeviceInfo.getApplicationName() },
  { title: 'Version', subtitle: DeviceInfo.getVersion() },
  { title: 'Build Number', subtitle: DeviceInfo.getBuildNumber() },
];

const DebugScreen = () => {
  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);
  return (
    <ScreenWithHeader isFirstScreen={false}>
      {debugData.map((item, index) => (
        <DebugItem key={index} title={item.title} value={item.subtitle} />
      ))}

      <View style={styles.Container}>
        <Button
          type="Primary"
          title="Set Account"
          onPress={() => dispatch(setUser(accountDetailsStub))}
        />
        <Button
          type="Primary"
          title="LogOut"
          onPress={() => dispatch(setUser({ isAuthenticated: false }))}
        />
        <Button
          type="Primary"
          title="Set Search History"
          onPress={() =>
            dispatch(
              setSearchHistory(['search1', 'search2', 'search3', 'search4']),
            )
          }
        />
      </View>
    </ScreenWithHeader>
  );
};
export default DebugScreen;
