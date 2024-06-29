import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const white = '#FFFFFF';
const black = '#000000';
const orange = '#EE8924';

const SkeletonScreen = () => {
  const {
    container,
    topContainer,
    headingBar,
    bottomContainer,
    profileImg,

    headingStyle,
    subHeading,
    textStyle,
    inputs,
    inputHidden,
    passwordInput,
    logoutBtn,
    logoutText,
    imgShadow,
    mail,
    phone,
    website,
    password,
  } = styles;
  return (
    <View style={container}>
      <View style={topContainer}>
        <View style={headingBar}>
          <Image source={require('../../assets/arrow-left.png')} />
          <Image source={require('../../assets/setting-2.png')} />
        </View>
        <View style={profileImg}>
          <Text style={imgShadow}></Text>
        </View>

        <Text style={headingStyle}></Text>
        <Text style={subHeading}></Text>
      </View>
      <View style={bottomContainer}>
        <Text style={textStyle}></Text>
        <View style={inputs}>
          <Image source={require('../../assets/mail-01.png')} />
          <Text style={mail}></Text>
        </View>
        <Text style={textStyle}></Text>
        <View style={inputs}>
          <Image source={require('../../assets/phone.png')} />
          <Text style={phone}></Text>
        </View>
        <Text style={textStyle}></Text>
        <View style={inputs}>
          <Text style={website}></Text>
        </View>
        <Text style={textStyle}></Text>
        <View style={passwordInput}>
          <View style={inputHidden}>
            <Image source={require('../../assets/lock.png')} />
            <Text style={password}></Text>
          </View>
          <Image source={require('../../assets/view-off.png')} />
        </View>
        <TouchableOpacity style={logoutBtn}>
          <Text style={logoutText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SkeletonScreen;

const styles = StyleSheet.create({
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
    width: 139,
    height: 139,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
  },
  imgShadow: {
    // backgroundColor: 'gray',
  },
  attachedImg: {
    alignItems: 'center',
  },
  headingStyle: {
    width: 118,
    height: 11,
    backgroundColor: `${black}`,
    borderRadius: 11,
    marginTop: 8,
  },
  subHeading: {
    backgroundColor: '#8A8A8A',
    width: 89,
    height: 8,
    borderRadius: 8,
    marginTop: 12,
  },
  textStyle: {
    width: 76,
    height: 8,
    backgroundColor: `${black}`,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${black}20`,
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
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginTop: 16,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    backgroundColor: '#8A8A8A',
    width: 57,
    height: 9,
    borderRadius: 9,
  },
  mail: {
    width: 112,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#8A8A8A',
  },
  phone: {
    width: 71,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#8A8A8A',
  },
  website: {
    width: 95,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#8A8A8A',
  },
  password: {
    width: 112,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#8A8A8A',
  },
});
