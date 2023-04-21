import React from 'react';
import {SafeAreaView} from 'react-native';

import useAppStatus from '@DevEx/hooks/useAppStatus';

import LoadingSpinner from './screens/loading';
import Maintenance from './screens/maintenance/maintenance';

const AppStatusCheck = ({children}: {children: Element}) => {
  const {appStatus} = useAppStatus();
  console.log(appStatus, 'appStatus');

  switch (appStatus) {
    case 'loading':
      return (
        <SafeAreaView>
          <LoadingSpinner animating />
        </SafeAreaView>
      );
    case 'maintenanceMode':
      return <Maintenance />;
    case 'shouldUpgrade':
    case 'launchApp':
    default:
      return <>{children}</>;
  }
};
export default AppStatusCheck;
