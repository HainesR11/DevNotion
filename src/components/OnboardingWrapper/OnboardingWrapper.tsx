import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { OnboardingNavigator } from '@DevEx/navigators';
import Login from '@DevEx/screens/Login/Login';
import { RootState } from '@DevEx/utils/store/store';

import AppHydration from './AppHydration';

interface TOnboardingWrapper {
  children?: React.ReactNode;
}

const OnboardingWrapper: FC<TOnboardingWrapper> = ({ children }: any) => {
  const { isAuthenticated, actions } = useSelector(
    (state: RootState) => state.user,
  );

  const onboardingCollection = [];

  const shouldShowHydrationScreen = isAuthenticated === undefined;
  onboardingCollection.push({
    component: <AppHydration />,
    rules: [shouldShowHydrationScreen],
  });

  const shouldShowLoginScreen = !isAuthenticated;
  onboardingCollection.push({
    component: <Login />,
    rules: [shouldShowLoginScreen],
  });

  const shouldShowOnboarding =
    isAuthenticated &&
    actions &&
    actions.length > 0 &&
    actions.includes('Onboarding');
  onboardingCollection.push({
    component: <OnboardingNavigator />,
    rules: [shouldShowOnboarding],
  });

  const onboardingActionsToRender = onboardingCollection.filter(
    onboardingItem => {
      return onboardingItem.rules.every(rule => rule === true);
    },
  );

  if (onboardingActionsToRender && onboardingActionsToRender.length > 0) {
    return <>{onboardingActionsToRender[0].component}</>;
  }
  return <>{children}</>;
};

export default OnboardingWrapper;
