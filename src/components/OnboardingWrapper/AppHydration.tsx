import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoadingSpinner } from '@DevEx/screens';

const AppHydration = () => {
  return (
    <SafeAreaView
      edges={[]}
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <LoadingSpinner animating />
    </SafeAreaView>
  );
};

export default AppHydration;
