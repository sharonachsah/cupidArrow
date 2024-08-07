import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function VerificationScreen({ navigation }) {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Verification Code</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Name')}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>Didn't receive OTP? <Text style={styles.resendLink}>Resend Code</Text></Text>
      {/* <ImageBackground source={require('../assets/wave3.svg')} style={{ justifyContent: 'flex-end' }} /> */}
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
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
  resendText: {
    marginTop: 20,
    fontSize: 14,
  },
  resendLink: {
    color: '#FF5A5F',
    fontWeight: 'bold',
  },
});
