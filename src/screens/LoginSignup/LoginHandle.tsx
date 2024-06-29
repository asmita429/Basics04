import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen2 from '../SplashScreen/SplasScreen2';
import SplashScreen from '../SplashScreen/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginHandle = () => {
  const [storage, setStorage] = useState([]);
  const [hasToken, setHastoken] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const checkToken = () => {
    if (storage) {
      storage.map(item => {
        if (item.token) {
          setHastoken(true);
        }
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const oldStore = await getData();
      // await AsyncStorage.clear();

      setStorage(oldStore);

      console.log(oldStore);
    };

    fetchData();
    console.log(hasToken);
    checkToken();
  }, []);
  return <>{hasToken ? <SplashScreen2 /> : <SplashScreen />}</>;
};

export default LoginHandle;

const styles = StyleSheet.create({});
