import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Aes from 'react-native-aes-crypto';

const Test = () => {
  const generateKey = (password, salt, cost, length) =>
    Aes.pbkdf2(password, salt, cost, length, 'sha256');

  const encryptData = (text, key) => {
    return Aes.randomKey(16).then(iv => {
      return Aes.encrypt(text, key, iv, 'aes-256-cbc').then(cipher => ({
        cipher,
        iv,
      }));
    });
  };

  const decryptData = (encryptedData, key) =>
    Aes.decrypt(encryptedData.cipher, key, encryptedData.iv, 'aes-256-cbc');

  try {
    generateKey('Arnold', 'salt', 5000, 256).then(key => {
      console.log('Key:', key);
      encryptData('These violent delights have violent ends', key)
        .then(({cipher, iv}) => {
          console.log('Encrypted:', cipher);

          decryptData({cipher, iv}, key)
            .then(text => {
              console.log('Decrypted:', text);
            })
            .catch(error => {
              console.log(error);
            });

          Aes.hmac256(cipher, key).then(hash => {
            console.log('HMAC', hash);
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  } catch (e) {
    console.error(e);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  top: {
    backgroundColor: 'red',
    height: 700,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
