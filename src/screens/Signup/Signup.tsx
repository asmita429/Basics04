import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const blue = '#0098FF';
const white = '#FFFFFF';
const black = '#000000';

const KeyboardAvoidingComponent = ({navigation}) => {
  const {
    keyboardavoidingStyle,
    container,
    topContainer,
    bottomContainer,
    headingStyle,
    subHeadingStyle,

    logSignBtnStyle,
    loginBtnStyle,
    signupBtnStyle,
    loginTextStyle,

    emailStyle,
    logInBtnStyle,
    logInBtnTextStyle,
    termsText,
    spanStyle,
  } = styles;

  const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  console.log(state.name);

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView style={keyboardavoidingStyle}>
        <ScrollView style={keyboardavoidingStyle}>
          <View style={topContainer}>
            <Text style={headingStyle}>Welcome to SO</Text>
            <Text style={subHeadingStyle}>
              If you are new here, Let's Sign up!
            </Text>

            <View style={logSignBtnStyle}>
              <TouchableOpacity
                style={loginBtnStyle}
                onPress={() => navigation.navigate('login page')}>
                <Text style={loginTextStyle}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={signupBtnStyle}
                onPress={() => navigation.navigate('signin page')}>
                <Text style={loginTextStyle}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={bottomContainer}>
            <View style={emailStyle}>
              {/* <Image source={require('../../assets/Email.png')} /> */}
              <TextInput
                placeholder="Enter your name"
                onChangeText={val =>
                  setState(prevState => ({...prevState, name: val}))
                }
              />
            </View>

            <View style={emailStyle}>
              <Image source={require('../../assets/Email.png')} />
              <TextInput placeholder="Email Address" />
            </View>

            <View style={emailStyle}>
              <Image source={require('../../assets/Vector.png')} />
              <TextInput placeholder="Password" secureTextEntry={true} />
            </View>

            <View style={emailStyle}>
              <Image source={require('../../assets/Vector.png')} />
              <TextInput
                placeholder="Confirm password"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={logInBtnStyle}>
              <Text style={logInBtnTextStyle}>Sign In</Text>
            </TouchableOpacity>
            <Text style={termsText}>
              By signing in with an account, you agree to SO's
              <Text style={spanStyle}>Terms of Service</Text> and
              <Text style={spanStyle}> Privacy Policy.</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardavoidingStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: `${white}`,
    borderRadius: 26.16,
  },
  topContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: `${blue}10`,
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
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
    width: '60%',
    fontWeight: '400',
    color: `${black}`,
    fontSize: 15.7,
    fontFamily: 'Work-Sans',
    lineHeight: 18.41,
    letterSpacing: 1,
    textAlign: 'center',
    padding: 10,
    paddingBottom: 20,
  },
  logSignBtnStyle: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  loginBtnStyle: {
    width: '50%',
    borderTopRightRadius: 10,
  },
  signupBtnStyle: {
    width: '50%',
    borderTopLeftRadius: 10,
    backgroundColor: `${blue}10`,
  },
  loginTextStyle: {
    fontSize: 19.19,
    textAlign: 'center',
    padding: 15,
    fontWeight: '500',
    lineHeight: 22.51,
    color: `${black}`,
  },

  emailStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${white}`,
    height: 52,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    gap: 10,
    paddingHorizontal: 15,
    margin: 10,
    marginVertical: 10,
  },

  logInBtnStyle: {
    backgroundColor: `${blue}`,
    borderRadius: 10,
    height: 61,
    margin: 5,
    width: '100%',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInBtnTextStyle: {
    color: `${white}`,
    fontSize: 21,
    fontWeight: '700',
  },
  termsText: {
    textAlign: 'center',
    width: '90%',
    fontSize: 14,
    marginVertical: 50,
  },
  spanStyle: {
    textDecorationLine: 'underline',
    color: `${black}`,
  },
});

export default KeyboardAvoidingComponent;
