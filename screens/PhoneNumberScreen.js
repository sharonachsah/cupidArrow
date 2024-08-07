import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function PhoneNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>My Number Is</Text>
      <Text style={styles.msg}>We'll need your phone number to send an OTP for verification.</Text>
      <TextInput
        style={styles.input}
        placeholder="+91"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* <ImageBackground source={require('../assets/wave2.svg')} style={{ justifyContent: 'flex-end'}} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE6EB',
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
  msg: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
