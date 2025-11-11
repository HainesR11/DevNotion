import React from 'react';
import { Text } from 'react-native';

import ScreenWithHeader from '@DevEx/components/layouts/ScreenWithHeader/ScreenWithHeader';

const AccountDetails = () => {
  return (
    <ScreenWithHeader isFirstScreen title="Account Details">
      <Text>Hello there</Text>
    </ScreenWithHeader>
  );
};

export default AccountDetails;
