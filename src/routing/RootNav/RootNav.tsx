import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from '../StackNav/StackNav';
const RootNav = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default RootNav;
