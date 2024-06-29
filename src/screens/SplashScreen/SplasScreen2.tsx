import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Screen from './Screen';
import {ProfileScreen} from '../../screens';
import SkeletonScreen from './SkeletonScreen';

const SplashScreen2 = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <SkeletonScreen /> : <ProfileScreen />}
    </SafeAreaView>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
