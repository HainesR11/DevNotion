declare module 'react-native-config' {
  interface NativeConfig {
    NODE_SERVICE_URL: string;
    MONOLITH_API: string;
    MONOLITH_API_TOKEN: string;
  }

  const env: NativeConfig;
  export default env;
}
