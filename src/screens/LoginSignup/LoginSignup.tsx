import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import {storageContext} from '../../context/Context';

const blue = '#0098FF';
const white = '#FFFFFF';
const black = '#000000';

const LoginSignup = () => {
  const {
    flexone,
    container,
    topContainer,

    headingStyle,
    subHeadingStyle,

    logSignBtnStyle,
    loginBtnStyle,
    loginBtnStyle2,
    signupBtnStyle,
    signupBtnStyle2,
    loginTextStyle,
  } = styles;

  const [page, setPage] = useState(true);

  return (
    <storageContext.Provider value={{page, setPage}}>
      <SafeAreaView style={flexone}>
        <KeyboardAvoidingView style={flexone} behavior="padding">
          <ScrollView contentContainerStyle={container}>
            <View style={topContainer}>
              <Text style={headingStyle}>Welcome to SO</Text>
              <Text style={subHeadingStyle}>
                Login or Sign up to access your account
              </Text>

              <View style={logSignBtnStyle}>
                <TouchableOpacity
                  style={page ? loginBtnStyle : loginBtnStyle2}
                  onPress={() => setPage(true)}>
                  <Text style={loginTextStyle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={!page ? signupBtnStyle : signupBtnStyle2}
                  onPress={() => setPage(false)}>
                  <Text style={loginTextStyle}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
            {page ? <Comp1 /> : <Comp2 />}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </storageContext.Provider>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  flexone: {
    flex: 1,
  },
  container: {
    backgroundColor: `${white}`,
    flexGrow: 1,
    borderRadius: 26.16,
  },
  topContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: `${blue}10`,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  headingStyle: {
    fontWeight: '700',
    color: `${black}`,
    fontSize: 26.16,
    fontFamily: 'Work-Sans',
    lineHeight: 38.9,
    letterSpacing: 1.5,
    padding: 5,
  },
  subHeadingStyle: {
    width: '70%',
    fontWeight: '400',
    color: `${black}`,
    fontSize: 15.7,
    fontFamily: 'Work-Sans',
    lineHeight: 18.41,
    letterSpacing: 1,
    textAlign: 'center',
    padding: 5,
    paddingBottom: 20,
  },
  logSignBtnStyle: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  loginBtnStyle: {
    backgroundColor: `${blue}10`,
    width: '50%',
    borderTopRightRadius: 10,
  },
  loginBtnStyle2: {
    // backgroundColor: `${blue}`,
    width: '50%',
    borderTopRightRadius: 10,
  },
  signupBtnStyle: {
    width: '50%',
    borderTopLeftRadius: 10,
    backgroundColor: `${blue}10`,
  },
  signupBtnStyle2: {
    width: '50%',
    borderTopLeftRadius: 10,
  },
  loginTextStyle: {
    fontSize: 19.19,
    textAlign: 'center',
    padding: 15,
    fontWeight: '500',
    lineHeight: 22.51,
    color: `${black}`,
  },
});
