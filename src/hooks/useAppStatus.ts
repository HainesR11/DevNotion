import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useSelector } from 'react-redux';

// import {setConfig} from '@DevEx/utils/store/configSlice/configSlice';
import { RootState } from '@DevEx/utils/store/store';

type Status = 'loading' | 'maintenanceMode' | 'shouldUpgrade' | 'launchApp';

const useAppStatus = () => {
  const { show_maintenance_mode } = useSelector(
    (state: RootState) => state.config,
  );
  const [appStatus, setAppStatus] = useState<Status>('loading');

  const appState = useRef<AppStateStatus>(AppState.currentState);

  const appStatusCheck = useCallback(() => {
    if (show_maintenance_mode) {
      setAppStatus('maintenanceMode');
    } else {
      setAppStatus('launchApp');
    }
  }, [show_maintenance_mode]);

  const handleAppStateChange = useCallback(
    (nextState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextState === 'active'
      ) {
        appStatusCheck();
      }

      appState.current = nextState;
    },
    [appStatusCheck],
  );

  useEffect(() => {
    appStatusCheck();

    const listener = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      listener.remove();
    };
  }, [appStatusCheck, handleAppStateChange, show_maintenance_mode]);
  return { appStatus };
};

export default useAppStatus;
