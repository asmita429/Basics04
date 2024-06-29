import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const gray = '#D9D9D9';
const Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.fontStyle}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${gray}70`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});
