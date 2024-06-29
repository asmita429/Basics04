import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useContext, useState, useRef, useEffect} from 'react';
import {storageContext} from '../../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const blue = '#0098FF';
const white = '#FFFFFF';
const black = '#000000';

const Comp2 = () => {
  const {
    bottomContainer,
    emailStyle,
    termsText,
    logInBtnStyle,
    logInBtnTextStyle,
    spanStyle,
    bottomViwe,
  } = styles;

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };

  const [state, setState] = useState(initialState);
  const {setPage} = useContext(storageContext);
  let store: {name: string; email: string; password: string}[] = [];

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const handlePassword = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(state.email)) {
      Alert.alert('Invalid email address');
      return;
    } else if (state.password === '' || state.password.length < 6) {
      Alert.alert('password is not valid');
    } else if (state.password !== state.confirm) {
      Alert.alert('password does not match');
    } else {
      storeData();
      // showToast();
      // setPage(true);
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Successful!',
      text2: 'Your Signup is successful!',
    });
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async () => {
    try {
      let tempStore = [];
      let data = await getData();
      // const oldStore = data;

      console.log(data);
      if (data !== null) {
        data.map(item => {
          store.push(item);
        });
      }
      // if (store !== null) {
      store.push({
        name: state.name,
        email: state.email,
        password: state.password,
      });

      await AsyncStorage.setItem('user', JSON.stringify(store));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const oldData = await getData();
        store = oldData;
        // await storeData();
      };
      fetchData();
    } catch (er) {
      //
    }
    console.log(store);
  }, []);
  return (
    <View style={bottomContainer}>
      <View style={emailStyle}>
        {/* <Image source={require('../../assets/Email.png')} /> */}
        <TextInput
          placeholder="Enter your name"
          onChangeText={val =>
            setState(prevState => ({...prevState, name: val}))
          }
          onSubmitEditing={() => emailRef.current.focus()}
        />
      </View>

      <View style={emailStyle}>
        <Image source={require('../../assets/Email.png')} />
        <TextInput
          placeholder="Email Address"
          onChangeText={val =>
            setState(prevState => ({...prevState, email: val}))
          }
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </View>

      <View style={emailStyle}>
        <Image source={require('../../assets/Vector.png')} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={val =>
            setState(prevState => ({...prevState, password: val}))
          }
          ref={passwordRef}
          onSubmitEditing={() => confirmRef.current.focus()}
        />
      </View>

      <View style={emailStyle}>
        <Image source={require('../../assets/Vector.png')} />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={true}
          onChangeText={val =>
            setState(prevState => ({...prevState, confirm: val}))
          }
          ref={confirmRef}
        />
      </View>

      <View style={bottomViwe}>
        <TouchableOpacity style={logInBtnStyle} onPress={handlePassword}>
          <Text style={logInBtnTextStyle}>Sign In</Text>
        </TouchableOpacity>
        <Text style={termsText}>
          By signing in with an account, you agree to SO's
          <Text style={spanStyle}>Terms of Service</Text> and
          <Text style={spanStyle}> Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};

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
    fontSize: 16,
    color: `${black}`,
    fontWeight: '400',
    paddingLeft: 10,
    margin: 5,
  },

  bottomViwe: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
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

export default Comp2;
