import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const white = '#FFFFFF';
const black = '#000000';
const orange = '#EE8924';

const ProfileScreen = () => {
  const {
    keyboardavoid,
    container,
    topContainer,
    headingBar,
    bottomContainer,
    profileImg,
    attachedImg,
    headingStyle,
    textStyle,
    inputs,
    inputHidden,
    passwordInput,
    logoutBtn,
    logoutText,
  } = styles;

  const [storage, setStorage] = useState([]);

  const navigation = useNavigation();

  const setData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(storage));
    } catch (e) {
      //
    }
  };

  const handleLogout = () => {
    if (storage !== null) {
      storage.map(item => {
        console.log('storage items=>', item.token);
        if (item.token) {
          storage.pop();
        }
      });
      setStorage(storage);
      // console.log('storag=>', storage);
      setData();
      navigation.navigate('loginSignup');
      // Alert.alert('session end!');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // console.log('something');

    const fetchData = async () => {
      // AsyncStorage.clear();
      const data = await getData();
      setStorage(data);
      console.log(storage);
    };
    fetchData();
  }, []);

  return (
    <KeyboardAvoidingView style={keyboardavoid}>
      <SafeAreaView style={container}>
        <ScrollView style={keyboardavoid}>
          <View style={topContainer}>
            <View style={headingBar}>
              <TouchableOpacity
                onPress={() => navigation.navigate('loginSignup')}>
                <Image source={require('../../assets/arrow-left.png')} />
              </TouchableOpacity>

              <Image source={require('../../assets/setting-2.png')} />
            </View>
            <View style={profileImg}>
              <Image source={require('../../assets/Profile.png')} />
            </View>
            <View style={attachedImg}>
              <Image source={require('../../assets/Email.png')} />
            </View>
            <Text style={headingStyle}>GFXAgency</Text>
            <Text>UI UX DESIGN</Text>
          </View>
          <View style={bottomContainer}>
            <Text style={textStyle}>Your Email</Text>
            <View style={inputs}>
              <Image source={require('../../assets/mail-01.png')} />
              <TextInput placeholder="example@gmail.com" />
            </View>
            <Text style={textStyle}>Phone Number</Text>
            <View style={inputs}>
              <Image source={require('../../assets/phone.png')} />
              <TextInput placeholder="+977 98636000000" />
            </View>
            <Text style={textStyle}>Website</Text>
            <View style={inputs}>
              <TextInput placeholder="www.home.com" />
            </View>
            <Text style={textStyle}>Password</Text>
            <View style={passwordInput}>
              <View style={inputHidden}>
                <Image source={require('../../assets/lock.png')} />
                <TextInput placeholder="abcd123" />
              </View>
              <Image source={require('../../assets/view-off.png')} />
            </View>
            <TouchableOpacity style={logoutBtn} onPress={handleLogout}>
              <Text style={logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  keyboardavoid: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: `${white}`,
    padding: 10,
  },
  topContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 24,
  },
  bottomContainer: {
    padding: 10,
  },
  profileImg: {
    margin: 10,
    alignItems: 'center',
    // height: '35%',
  },
  attachedImg: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headingStyle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 1,
    color: `${black}`,
    fontFamily: 'Poppins',
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    letterSpacing: 1,
    color: `${black}`,
    marginTop: 10,
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${black}30`,
    gap: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  inputHidden: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${black}30`,
    paddingHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  logoutBtn: {
    borderColor: `${orange}`,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginTop: 16,
    height: 58,
  },
  logoutText: {
    color: `${orange}`,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
});
