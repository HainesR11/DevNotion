import React from 'react';
import { ActivityIndicator, useWindowDimensions } from 'react-native';

interface LoadingSpinnerProps {
  animating: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ animating }) => {
  const defaultSize = 1.2;
  const { fontScale } = useWindowDimensions();
  const size = fontScale > defaultSize ? 'large' : 'small';

  return <ActivityIndicator animating={animating} size={size} />;
};

export default LoadingSpinner;
