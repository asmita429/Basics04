import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  LoginScreen,
  SignupScreen,
  LoginSignup,
  SplashScreen,
  HomeSplashScreen,
} from '../../screens';
import ProfileScreen from '../../screens/Profile/Profile';
import {Screen} from 'react-native-screens';
import LoginHandle from '../../screens/LoginSignup/LoginHandle';
import SplashScreen2 from '../../screens/SplashScreen/SplasScreen2';

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="signin page" component={SignupScreen} /> */}
      {/* <Stack.Screen name="login page" component={LoginScreen} /> */}

      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeSplashScreen" component={HomeSplashScreen} /> */}

      <Stack.Screen name="loginhandle" component={LoginHandle} />
      <Stack.Screen name="profilepage" component={SplashScreen2} />
      <Stack.Screen name="loginSignup" component={LoginSignup} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
