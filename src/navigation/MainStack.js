import React from 'react';
import AuthStack from './AuthStack';
import MainNavigator from './MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
const MainStack = () => {
  return (
    <>
      <NavigationContainer>
        <AuthStack />
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default MainStack;
