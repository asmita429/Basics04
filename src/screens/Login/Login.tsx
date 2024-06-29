import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const blue = '#0098FF';
const white = '#FFFFFF';
const black = '#000000';

const Login = ({navigation}) => {
  const {
    keyboardAvoidStyle,
    container,
    topContainer,
    bottomContainer,
    headingStyle,
    subHeadingStyle,

    logSignBtnStyle,
    loginBtnStyle,
    signupBtnStyle,
    loginTextStyle,

    loginWithBtnStyle,
    continueText,
    emailStyle,
    passwordStyle,
    lockPassStyle,

    bodyText,
    termsText,
    logInBtnStyle,
    logInBtnTextStyle,
    spanStyle,
  } = styles;

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView style={keyboardAvoidStyle}>
      <SafeAreaView style={container}>
        <ScrollView>
          <View style={topContainer}>
            <Text style={headingStyle}>Welcome to SO</Text>
            <Text style={subHeadingStyle}>
              Login or Sign up to access your account
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
            <TouchableOpacity style={loginWithBtnStyle}>
              <Image source={require('../../assets/Social_Icons.png')} />
              <Text style={loginTextStyle}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={loginWithBtnStyle}>
              <Image source={require('../../assets/apple.png')} />
              <Text style={loginTextStyle}>Login with Apple</Text>
            </TouchableOpacity>
            <Text style={continueText}>or continue with email</Text>
            <View style={emailStyle}>
              <Image source={require('../../assets/Email.png')} />
              <TextInput placeholder="Email Address" />
            </View>

            <View style={passwordStyle}>
              <View style={lockPassStyle}>
                <Image source={require('../../assets/Vector.png')} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={showPassword}
                />
              </View>
              <TouchableOpacity onPress={togglePassword}>
                <Image source={require('../../assets/Eye.png')} />
              </TouchableOpacity>
            </View>

            <Text style={bodyText}>Forgot password?</Text>
            <TouchableOpacity style={logInBtnStyle}>
              <Text style={logInBtnTextStyle}>Login</Text>
            </TouchableOpacity>
            <Text style={termsText}>
              By signing in with an account, you agree to SO's
              <Text style={spanStyle}>Terms of Service</Text> and
              <Text style={spanStyle}> Privacy Policy.</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  keyboardAvoidStyle: {
    // flex: 1,
  },
  container: {
    backgroundColor: `${white}`,
    height: '100%',
    width: '100%',
    borderRadius: 26.16,
  },
  topContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  bottomContainer: {
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
  signupBtnStyle: {
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
  loginWithBtnStyle: {
    height: 61,
    backgroundColor: `${white}`,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
  continueText: {
    marginVertical: 20,
    padding: 5,
    textAlign: 'center',
    fontSize: 16,
    color: `${black}`,
    fontWeight: '400',
  },
  emailStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${white}`,
    height: 52,
    borderRadius: 10,
    justifyContent: 'flex-start',
    gap: 10,
    paddingHorizontal: 15,
    margin: 10,
  },
  lockPassStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  passwordStyle: {
    flexDirection: 'row',
    backgroundColor: `${white}`,
    alignItems: 'center',
    height: 52,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    margin: 10,
    marginVertical: 10,
  },
  bodyText: {
    fontSize: 16,
    color: `${black}`,
    fontWeight: '400',
    paddingLeft: 10,
    margin: 5,
  },

  logInBtnStyle: {
    backgroundColor: `${blue}`,
    borderRadius: 10,
    height: 61,
    margin: 5,
    marginVertical: 30,
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
    fontSize: 13,
    marginTop: 10,
  },
  spanStyle: {
    textDecorationLine: 'underline',
    color: `${black}`,
  },
});
