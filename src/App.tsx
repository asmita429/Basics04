import React from 'react';
import RootNav from './routing/RootNav/RootNav';
import Toast from 'react-native-toast-message';

const Root = () => {
  return (
    <>
      <RootNav />
      <Toast />
    </>
  );
};

export default Root;
