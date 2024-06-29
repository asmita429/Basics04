import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const blue = '#0098FF';
const white = '#FFFFFF';
const black = '#000000';

const Comp1 = () => {
  const {
    bottomContainer,
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

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [storage, setStorage] = useState([]);

  const navigation = useNavigation();
  const passwordRef = useRef(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogin = () => {
    if (storage !== null) {
      storage.map(item => {
        // console.log('btn pressed');
        if (
          item.email === loginData.email &&
          item.password === loginData.password
        ) {
          // console.log('success!');
          navigation.navigate('profilepage');
          mergeToken(item);
          return;
        } else {
          return Alert.alert('wrong email or password');
        }
      });
    }
  };

  // Here might a problem refactor it
  const mergeToken = async item => {
    try {
      const token = Math.random().toString(36).substring(2, 6);

      const store = [];
      let tempStore = [];
      const oldItem = JSON.parse(await AsyncStorage.getItem('user'));
      tempStore = oldItem;
      console.log(oldItem);
      tempStore.map(data => {
        store.push(data);
      });
      store.push({
        token: token,
        name: item.name,
        email: item.email,
        password: item.password,
      });

      await AsyncStorage.setItem('user', JSON.stringify(store));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const oldStore = await getData();
      // await AsyncStorage.clear();

      setStorage(oldStore);
    };
    fetchData();
    console.log(storage);
  }, []);

  return (
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
        <TextInput
          value={loginData.email}
          placeholder="Email Address"
          onChangeText={val =>
            setLoginData(prevData => ({...prevData, email: val}))
          }
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </View>

      <View style={passwordStyle}>
        <View style={lockPassStyle}>
          <Image source={require('../../assets/Vector.png')} />
          <TextInput
            placeholder="Password"
            value={loginData.password}
            secureTextEntry={!showPassword}
            onChangeText={val =>
              setLoginData(prevData => ({...prevData, password: val}))
            }
            ref={passwordRef}
          />
        </View>
        <TouchableOpacity onPress={togglePassword}>
          <Image source={require('../../assets/Eye.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={bodyText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={logInBtnStyle} onPress={handleLogin}>
        <Text style={logInBtnTextStyle}>Login</Text>
      </TouchableOpacity>
      <Text style={termsText}>
        By signing in with an account, you agree to SO's
        <Text style={spanStyle}>Terms of Service</Text> and
        <Text style={spanStyle}> Privacy Policy.</Text>
      </Text>
    </View>
  );
};

export default Comp1;

const styles = StyleSheet.create({
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
    fontSize: 14,
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
    width: '100%',
    marginTop: 10,
    fontSize: 14,
  },
  spanStyle: {
    textDecorationLine: 'underline',
    color: `${black}`,
  },
});
