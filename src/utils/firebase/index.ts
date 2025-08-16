import remoteConfig from '@react-native-firebase/remote-config';

import { firebaseDefaults } from '@DevEx/constants';

import { setConfig } from '../store/configSlice/configSlice';

export const fetchFirebase = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 30000,
  });

  await remoteConfig()
    .setDefaults(firebaseDefaults)
    .then(() =>
      remoteConfig()
        .fetchAndActivate()
        .then(active => {
          console.log('firebase active - ', active);
          const config = remoteConfig().getAll();
          Object.entries(config).forEach($ => {
            const [key, entry] = $;
            setConfig({ [key]: entry.asString() });
          });
        })
        .catch(error => console.log('error - ', error)),
    )
    .catch(error => console.log('error - ', error));

  remoteConfig().onConfigUpdated(async (event, error) => {
    if (error !== undefined) {
      console.log(
        'remote-config listener subscription error: ' + JSON.stringify(error),
      );
    } else {
      await remoteConfig()
        .fetch()
        .then(() => {
          console.log('remote-config updated');

          const config = remoteConfig().getAll();
          Object.entries(config).forEach($ => {
            const [key, entry] = $;
            key === event?.updatedKeys.toString() &&
              setConfig({ [key]: entry.asString() });
          });
        });
    }
  });
};
