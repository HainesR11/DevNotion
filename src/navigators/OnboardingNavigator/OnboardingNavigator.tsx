import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AddUsername } from '@DevEx/screens';
import AddProfielPic from '@DevEx/screens/Onboarding/AddProfilePic';

export type TOnboardingNavigator = {
  addUsername: undefined;
  addProfilePic: undefined;
};

const OnboardingStack = createStackNavigator<TOnboardingNavigator>();

const OnboardingNavigator = () => {
  return (
    <NavigationContainer>
      <OnboardingStack.Navigator
        initialRouteName="addUsername"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      >
        <OnboardingStack.Screen name="addUsername" component={AddUsername} />
        <OnboardingStack.Screen
          name="addProfilePic"
          component={AddProfielPic}
        />
      </OnboardingStack.Navigator>
    </NavigationContainer>
  );
};
export default OnboardingNavigator;
